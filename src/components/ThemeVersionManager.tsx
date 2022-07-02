import React, { useState, useEffect, useRef } from 'react'
import { Divider, Input, Space, Typography, Button, Select, message, Modal } from 'antd'
import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons'
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import cs from 'classnames';
import * as ls from '../utils/ls'
import style from './index.module.scss'
const { Option } = Select;

interface IThemeVersionManager {
  /** 注入到Manager中的resume文本 */
  theme: string;
  /** 版本变化时触发 */
  onVersionChange: (props: { version: string; style: string; }) => void;
}


/**
 * @description 内容版本管理器, 主应用无需感知版本号
 *
 * @export
 * @param {IThemeVersionManager} {
 *   onVersionChange,
 *   shouldVersionChange,
 *   stylestring
 * }
 * @return {*} 
 */
export default function ThemeVersionManager({
  onVersionChange,
  theme
}: IThemeVersionManager) {
  
  const [curVer, setCurVer] = useState('default')
  const [verList, setVerList] = useState<string[]>(ls.getAllStyleKeys())
  const verInputRef = useRef<any>(null)
  useEffect(() => {
    const styleLs = ls.getStyle(curVer)
    setVerList(ls.getAllStyleKeys())
    onVersionChange({ version: curVer, style: styleLs })
  }, [curVer])

  const addVersion = (newVersion: string) => {
    if (verList.includes(newVersion)) {
      message.info('can not add same version')
      return
    }
    ls.setStyle(newVersion, theme)
    setVerList([...verList, newVersion])
  }

  const switchVersion = (newVersion: string) => {
    ls.setStyle(curVer, theme)
    setCurVer(newVersion)
  }

  const deleteVersion = (e: React.MouseEvent, version: string) => {
    e.stopPropagation()
    Modal.confirm({
      title: 'do you want to delete this version?',
      content: `version: ${version}`,
      onOk: () => {
        ls.deleteStyle(version)
        message.success('delete success')
        setVerList(ls.getAllStyleKeys())
      }
    })
  }

  const editStyle = (e: React.MouseEvent, version: string) => {
    e.stopPropagation()
    Modal.confirm({
      title: 'edit theme: ' + version,
      icon: null,
      width: '80%',
      content: (
        <div>
          <CodeMirror
            value={ls.getStyle(version)}
            height="400px"
            extensions={[css()]}
            onChange={(val) => ls.setStyle(version, val)}
          />
        </div>
      ),
      onOk: () => {
        version === curVer && onVersionChange({ version: version, style: ls.getStyle(version) })
      }
    })
  }

  return (
    <div className={cs(style.managerWrap)}>
      <span className={style.managerLabel}>Theme: </span>
      <Select
        style={{ width: 300 }}
        placeholder="custom dropdown render"
        dropdownRender={menu => (
          <>
            {menu}
            <Divider style={{ margin: '8px 0' }} />
            <Space align="center" style={{ padding: '0 8px 4px' }}>
              <Input placeholder="Please enter item" ref={verInputRef} />
              <Typography.Link onClick={() => {
                verInputRef?.current?.input &&
                addVersion(verInputRef.current.input.value)
              }
              } style={{ whiteSpace: 'nowrap' }}>
                Add item
              </Typography.Link>
            </Space>
          </>
        )}
        value={curVer}
        onChange={switchVersion}
      >
        {verList.map((item: string) => (
          <Option key={item}>
            <div className={style.optionBody}>
              <div className={style.optionLable}>{item}</div>
                <div className={style.optionDelete} >
                  <EditOutlined onClick={(e) => editStyle(e, item)} />
                  {curVer !== item && item!=='default' && (
                      <CloseCircleOutlined onClick={(e) => deleteVersion(e, item)} />
                  )}
              </div>
            </div>
          </Option>
        ))}
      </Select>
    </div>
  )
}
