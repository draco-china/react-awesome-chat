/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:56:37
 * @LastEditTime: 2021-06-25 22:18:33
 */
import React from 'react';
import { Contact } from '@/typings';
import style from './index.less';

type ChatHeaderProps = {
  data: Contact;
};
export default function ChatHeader({ data }: ChatHeaderProps) {
  return (
    <div className={style.content}>
      <img className={style.avatar} src={data.avatar} />
      <div className={style.desc_area}>
        <span className={style.nickname}>{data.nickname}</span>
        <span className={style.sologan}>{data.desc}</span>
      </div>
    </div>
  );
}
