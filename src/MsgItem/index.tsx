/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 22:25:03
 * @LastEditTime: 2021-06-29 04:28:53
 */
import React from 'react';
import classNames from 'classnames';
import { DateFormat } from '@/utils';
import MsgBubble from '../MsgBubble';
import { Contact, ContactMessage } from '../typings';

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
      className={classNames('chat-msg-item-content', 'chat-flex', {
        reverse: isMe,
      })}
    >
      <div className="chat-msg-item-avatar">
        <img src={data.user.avatar} />
      </div>
      <div
        className={classNames('chat-msg-item-text_area', {
          'align-end': isMe,
        })}
      >
        <div className="chat-msg-item-comment_area">
          <span className="chat-msg-item-nickname_text">
            {data.user.nickname}
          </span>
          <span className="chat-msg-item-date_text">
            {DateFormat(data.date, true)}
          </span>
        </div>
        <MsgBubble isMe={isMe} data={data.message} />
      </div>
    </div>
  );
}
