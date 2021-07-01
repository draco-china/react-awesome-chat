/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:56:37
 * @LastEditTime: 2021-07-01 22:45:21
 */
import React from 'react';
import { Contact } from '../typings';

import './index.less';

type ChatHeaderProps = {
  data: Contact;
};
export default function ChatHeader({ data }: ChatHeaderProps) {
  return (
    <div className="chat-header-content">
      <img className="chat-header-avatar" src={data?.avatar} />
      <div className="chat-header-desc_area">
        <span className="chat-header-nickname">{data?.nickname}</span>
        <span className="chat-header-sologan">{data?.desc}</span>
      </div>
    </div>
  );
}
