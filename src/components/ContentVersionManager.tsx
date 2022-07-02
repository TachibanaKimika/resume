import React, { useState, useEffect, useRef } from 'react'
import { Divider, Input, Space, Typography, Button, Select, message, Modal } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import * as ls from '../utils/ls'
import style from './index.module.scss'
const { Option } = Select;

interface IContentVersionManager {
  /** 注入到Manager中的resume文本 */
  content: string;
  /** 版本变化时触发 */
  onVersionChange: (props: { version: string; content: string; }) => void;
}


/**
 * @description 内容版本管理器, 主应用无需感知版本号
 *
 * @export
 * @param {IContentVersionManager} {
 *   onVersionChange,
 *   shouldVersionChange,
 *   content
 * }
 * @return {*} 
 */
export default function ContentVersionManager({
  onVersionChange,
  content
}: IContentVersionManager) {
  
  const [curVer, setCurVer] = useState('default')
  const [verList, setVerList] = useState<string[]>(ls.getAllContentKeys())
  const verInputRef = useRef<any>(null)

  useEffect(() => {
    const content = ls.getContent(curVer)
    console.log('v:', curVer, 'c', content)
    setVerList(ls.getAllContentKeys())
    onVersionChange({ version: curVer, content })
  }, [curVer])

  const addVersion = (newVersion: string) => {
    if (verList.includes(newVersion)) {
      message.info('can not add same version')
      return
    }
    ls.setContent(newVersion, content)
    setVerList([...verList, newVersion])
  }

  const switchVersion = (newVersion: string) => {
    ls.setContent(curVer, content)
    setCurVer(newVersion)
  }

  const deleteVersion = (e: React.MouseEvent, version: string) => {
    e.stopPropagation()
    Modal.confirm({
      title: 'do you want to delete this version?',
      content: `version: ${version}`,
      onOk: () => {
        ls.deleteContent(version)
        message.success('delete success')
        setVerList(ls.getAllContentKeys())
      }
    })
  }

  return (
    <div className={style.managerWrap}>
      <span className={style.managerLabel}>Resume Version:</span>
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
                }}
                style={{ whiteSpace: 'nowrap' }}>
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
              {curVer !== item && item!=='default' && (
                <div className={style.optionDelete}>
                  <CloseCircleOutlined onClick={(e) => deleteVersion(e, item)} />
                </div>
              )}
            </div>
          </Option>
        ))}
      </Select>
    </div>
  )
}
