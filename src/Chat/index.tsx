/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:53:12
 * @LastEditTime: 2021-07-01 22:22:41
 */
import { Contact, ContactMessage } from '../typings';
import React from 'react';
import ChatHeader from '../ChatHeader';
import ChatInput from '../ChatInput';
import ChatRecordList from '../ChatRecordList';

import './index.less';

type ChatProps = {
  from: Contact;
  to: Contact;
  data?: ContactMessage[];
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
      <ChatHeader data={props.to} />
      <ChatRecordList
        {...props}
        ref={chatRecordList}
        data={props.data}
        className="chat-content-list"
        bottom
        borderd
      />
      <ChatInput {...props} onSend={sendHandle} />
    </div>
  );
};

export default Chat;
