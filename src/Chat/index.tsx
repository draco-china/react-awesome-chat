/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:53:12
 * @LastEditTime: 2021-06-26 02:45:06
 */
import { Contact, ContactMessage } from '@/typings';
import React from 'react';
import ChatHeader from '../ChatHeader';
import ChatInput from '../ChatInput';
import ChatRecordList from '../ChatRecordList';

import style from './index.less';

const textHeight = 150;

type ChatProps = {
  onSend?: (msgData: ContactMessage) => any;
  me: Contact;
  contact: Contact;
  chatList?: ContactMessage[];
  tools?: React.ReactNode[];
  style: {
    height: number;
    width: number | string;
  };
};

const Chat: React.FC<ChatProps> = (props) => {
  const chatRecordList = React.createRef<any>();

  const sendHandle = (msgData: ContactMessage) => {
    props.onSend?.(msgData);
    chatRecordList?.current?.computeHeight();
  };

  const listHeight = props.style.height - textHeight - 60;

  return (
    <div className={style.content} style={props.style}>
      <ChatHeader data={props.contact} />
      <ChatRecordList
        {...props}
        ref={chatRecordList}
        data={props.chatList}
        height={listHeight}
        style={{ height: listHeight }}
        bottom
      />
      <ChatInput {...props} height={textHeight} onSend={sendHandle} />
    </div>
  );
};

Chat.defaultProps = {
  style: {
    height: 500,
    width: 600,
  },
};

export default Chat;
