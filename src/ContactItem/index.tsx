/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 23:09:41
 * @LastEditTime: 2021-06-26 01:32:50
 */
import React from 'react';
import { Contact } from '@/typings';
const classNames = require('classnames');

import style from './index.less';

export type ContactItemProps = {
  selected: boolean;
  border: boolean;
  contact: Contact;
  onClick?: (contact: Contact) => void;
};

const ContactItem: React.FC<ContactItemProps> = ({
  selected,
  border,
  contact,
  onClick,
}) => (
  <div
    className={classNames(style.content, {
      [style.bottom_border]: border,
      [style.selected]: selected,
    })}
    onClick={() => onClick?.(contact)}
  >
    <img className={style.icon} src={contact.avatar} />
    <div className={style.info_area}>
      <span className={`${style.nickname} ${style.ellipsis}`}>
        {contact.nickname}
      </span>
      <span className={`${style.desc} ${style.ellipsis}`}>
        {contact.message}
      </span>
    </div>
    <span className={style.date_area}>{contact.date}</span>
  </div>
);

export default ContactItem;
