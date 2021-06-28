/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 22:25:03
 * @LastEditTime: 2021-06-28 23:55:16
 */
import React from 'react';
import moment from 'moment';
import { Contact, ContactMessage } from '../typings';
import MsgBubble from '../MsgBubble';
import classNames from 'classnames';

import '../common.less';
import './index.less';

type MsgItemProps = {
  data: ContactMessage;
  me: Contact;
};

export default function MsgItem({ data, me }: MsgItemProps) {
  const isMe = data.user.id === me.id;

  return (
    <div
      className={classNames('chat-msg-item-content', 'chat-flex')}
      style={{ flexDirection: isMe ? 'row-reverse' : 'row' }}
    >
      <div className="chat-msg-item-avatar">
        <img src={data.user.avatar} />
      </div>
      <div
        className="chat-msg-item-text_area"
        style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}
      >
        <div className="chat-msg-item-comment_area">
          <span className="chat-msg-item-nickname_text">
            {data.user.nickname}
          </span>
          <span className="chat-msg-item-date_text">
            {moment(data.date).format('YYYY-MM-DD HH:mm:ss')}
          </span>
        </div>
        <MsgBubble isMe={isMe} data={data.message} />
      </div>
    </div>
  );
}
