/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:53:12
 * @LastEditTime: 2021-06-29 00:06:44
 */
import { Contact, ContactMessage } from '../typings';
import React from 'react';
import ChatHeader from '../ChatHeader';
import ChatInput from '../ChatInput';
import ChatRecordList from '../ChatRecordList';

import './index.less';

type ChatProps = {
  me: Contact;
  contact: Contact;
  chatList?: ContactMessage[];
  tools?: React.ReactNode[];
  onSend?: (msgData: ContactMessage) => any;
  onEarlier?: () => void;
};

const Chat: React.FC<ChatProps> = (props) => {
  const chatRecordList = React.createRef<any>();

  const sendHandle = (msgData: ContactMessage) => {
    props.onSend?.(msgData);
    chatRecordList?.current?.computeHeight();
  };

  return (
    <div className="chat-content">
      <ChatHeader data={props.contact} />
      <ChatRecordList
        {...props}
        ref={chatRecordList}
        data={props.chatList}
        className="chat-content-list"
        bottom
      />
      <ChatInput {...props} onSend={sendHandle} />
    </div>
  );
};

export default Chat;
