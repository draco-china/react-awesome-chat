/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 23:09:41
 * @LastEditTime: 2021-06-29 04:54:05
 */
import React from 'react';
import { DateFormat } from '../utils';
import classNames from 'classnames';
import { Contact } from '../typings';

import './index.less';

export type ContactItemProps = {
  selected: boolean;
  contact: Contact;
  onClick?: (contact: Contact) => void;
};

const ContactItem: React.FC<ContactItemProps> = ({
  selected,
  contact,
  onClick,
}) => (
  <div
    className={classNames('chat-contact-item-content', {
      'chat-contact-item-selected': selected,
    })}
    onClick={() => onClick?.(contact)}
  >
    <img className="chat-contact-item-icon" src={contact.avatar} />
    <div className="chat-contact-item-info_area">
      <span className={`chat-contact-item-nickname chat-contact-item-ellipsis`}>
        {contact.nickname}
      </span>
      <span className={`chat-contact-item-desc chat-contact-item-ellipsis`}>
        {contact.message}
      </span>
    </div>
    <span className="chat-contact-item-date_area">
      {DateFormat(contact.date)}
    </span>
  </div>
);

export default ContactItem;
