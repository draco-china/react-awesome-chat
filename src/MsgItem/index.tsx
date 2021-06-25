/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 22:25:03
 * @LastEditTime: 2021-06-26 01:33:16
 */
import React from 'react';
import dayjs from 'dayjs';
import { Contact, ContactMessage } from '@/typings';
import MsgBubble from '../MsgBubble';
const classNames = require('classnames');

import globalStyle from '../common.css';
import style from './index.css';

type MsgItemProps = {
  data: ContactMessage;
  me: Contact;
};

export default function MsgItem({ data, me }: MsgItemProps) {
  const isMe = data.user.id === me.id;

  return (
    <div
      className={classNames(style.content, globalStyle.flex)}
      style={{ flexDirection: isMe ? 'row-reverse' : 'row' }}
    >
      <div className={style.avatar}>
        <img src={data.user.avatar} />
      </div>
      <div
        className={style.text_area}
        style={{ alignItems: isMe ? 'flex-end' : 'flex-start' }}
      >
        <div className={style.comment_area}>
          <span className={style.nickname_text}>{data.user.nickname}</span>
          <span className={style.date_text}>
            {dayjs.unix(data.date).format('MM-DD HH:mm:ss')}
          </span>
        </div>
        <MsgBubble isMe={isMe} data={data.message} />
      </div>
    </div>
  );
}
