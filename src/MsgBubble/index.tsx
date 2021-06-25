/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 23:03:52
 * @LastEditTime: 2021-06-26 03:59:29
 */
import React from 'react';
import { Message } from '@/typings';
import classNames from 'classnames';

import style from './index.less';

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
        return <img className={style.img_content} src={message.content} />;
      default:
        break;
    }
  };
  return (
    <div
      className={classNames(
        style.text_content,
        style.arrow,
        isMe ? style.arrow_right : style.arrow_left,
      )}
    >
      {renderContent(data)}
    </div>
  );
};
export default MsgBubble;
