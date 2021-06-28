/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 23:03:52
 * @LastEditTime: 2021-06-26 05:13:44
 */
import React from 'react';
import { Message } from '../typings';
import classNames from 'classnames';

import './index.less';

type MsgBubbleProps = {
  data: Message;
  isMe: boolean;
};

const MsgBubble: React.FC<MsgBubbleProps> = ({ data, isMe }) => {
  const renderContent = (message: Message) => {
    switch (message.type) {
      case 'text':
        return message.content;
      case 'image':
        return (
          <img className="chat-msg-bubble-img_content" src={message.content} />
        );
      default:
        break;
    }
  };
  return (
    <div
      className={classNames(
        'chat-msg-bubble-text_content',
        'chat-msg-bubble-arrow',
        isMe ? 'chat-msg-bubble-arrow_right' : 'chat-msg-bubble-arrow_left',
      )}
    >
      {renderContent(data)}
    </div>
  );
};
export default MsgBubble;
