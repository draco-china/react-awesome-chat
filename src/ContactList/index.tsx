/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:57:47
 * @LastEditTime: 2021-06-26 01:32:42
 */
import React, { useState } from 'react';
import ContactItem from '../ContactItem';
import ScrollBarWrapper from '../ScrollBarWrapper';
import { Contact } from '@/typings';

import style from './index.css';

type ContactListProps = {
  data: Contact[];
  onSelect: (contact: Contact) => void;
  onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
};

const ContactList = React.forwardRef<HTMLDivElement, ContactListProps>(
  (props, ref) => {
    const [selectId, setSelectId] = useState<string>();

    const selectContactHandle = (con: Contact) => {
      setSelectId(con.id);
      props.onSelect && props.onSelect(con);
    };

    return (
      <div className={style.list_area} ref={ref} onScroll={props.onScroll}>
        {props.data?.map((contact, index) => (
          <ContactItem
            contact={contact}
            key={contact.id}
            border={index + 1 !== props.data?.length}
            selected={selectId === contact.id}
            onClick={selectContactHandle.bind(this, contact)}
          />
        ))}
      </div>
    );
  },
);
export default ScrollBarWrapper(ContactList);
