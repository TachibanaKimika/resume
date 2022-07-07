import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import {
  Button, Spin, Dropdown, Menu, Switch,
} from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import printJS from 'print-js';
import download from 'js-file-download';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import _ from 'lodash';
import html2pdf from 'html2pdf.js';
import jsx2str from 'react-element-to-jsx-string';
import ContentVersionManager from './components/ContentVersionManager';
import ThemeVersionManager from './components/ThemeVersionManager';
import initHtml from './utils/html';
import { init } from './modules/init';
import * as ls from './utils/ls';
import style from './index.module.scss';
import marked from './utils/marked';

export default function App() {
  const [content, setContent] = useState('');
  const [version, setVersion] = useState('default');
  const [theme, setTheme] = useState<string>('');
  const [mdeInstance, setMdeInstance] = useState<any>(null);
  const [isRenderDisable, setIsRenderDisable] = useState(false);
  useEffect(() => {
    init();
    const contentMd = ls.getContent('default');
    const themeCss = ls.getStyle('default');
    setContent(contentMd);
    setTheme(themeCss);
  }, []);

  useEffect(() => {
    if (content) {
      saveContent();
    }
  }, [content]);

  const contentVersionChange = ({ version: v, content }: {
    version: string;
    content: string;
  }) => {
    console.log(v);
    setVersion(v);
    setContent(content);
  };

  const themeVersionChange = ({ version: v, style }: {
    version: string;
    style: string;
  }) => {
    setTheme(style);
  };

  const saveContent = () => {
    content && ls.setContent(version, content);
  };

  const getContentHtml = () => {
    const html = initHtml(marked(mdeInstance?.value()), theme);
    return html;
  };

  const getMdeInstanceCallback = useCallback((mde: any) => {
    mde.options.previewRender = _.debounce((text: string, preview: HTMLElement) => {
      if (isRenderDisable) {
        return;
      }
      preview.innerHTML = jsx2str(
        <iframe title='preview' frameBorder={0} width='100%' height='100%' srcDoc={initHtml(marked(text), theme)} />,
      );
    }, 1000);
    setMdeInstance(mde);
  }, [theme, isRenderDisable]);

  const downloadPdf = async () => {
    const html = getContentHtml();
    const pdfBolck = document.getElementById('pdf-init');
    if (!pdfBolck) {
      return;
    }
    pdfBolck.innerHTML = html;
    pdfBolck.style.display = 'block';
    const worker = await html2pdf().set({
      margin: [10, 0, 10, 0],
      html2canvas: {
        allowTaint: false,
        useCORS: true,
        dpi: 1600,
      },
    }).from(pdfBolck).save('resume.pdf');
    console.log('success', worker);
    pdfBolck.style.display = 'none';
  };

  const printPdf = async () => {
    const html = getContentHtml();
    printJS({
      type: 'raw-html',
      css: '',
      scanStyles: true,
      printable: html,
      targetStyles: ['*'],
      documentTitle: '&nbsp',
    });
  };

  const downloadEvent = ({ key }: { key: string }) => {
    switch (key) {
      case 'printjs': printPdf(); break;
      case 'canvans': downloadPdf(); break;
      case 'markdown': download(content, 'resume.md'); break;
      default: download(content, 'resume.html'); break;
    }
  };

  const downloadMenu = (
    <Menu
      items={[{
        label: 'download pdf (printjs)',
        key: 'printjs',
      }, {
        label: 'download pdf (html2canvans)',
        key: 'canvans',
      }, {
        label: 'download markdown',
        key: 'markdown',
      }]}
      onClick={downloadEvent}
    />
  );

  return (
    <div className={style.body}>
      <div className={style.topBar}>
        <ContentVersionManager content={content} onVersionChange={contentVersionChange} />
        <ThemeVersionManager theme={theme} onVersionChange={themeVersionChange} />
      </div>
      <div className={style.buttons}>
        <Dropdown.Button
          overlay={downloadMenu}
          onClick={downloadPdf}
          type='primary'
        >
          Download pdf
        </Dropdown.Button>
        <Button type='link' onClick={() => window.open('https://github.com/TachibanaKimika/resume', '_blank')}>
          <LinkOutlined />
          {' '}
          Github
        </Button>
      </div>
      <div className={style.editorBody}>
        <SimpleMDE
          value={content}
          onChange={setContent}
          getMdeInstance={getMdeInstanceCallback}
        />
      </div>
    </div>
  );
}
