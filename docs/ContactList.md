<!--
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-26 01:14:29
 * @LastEditTime: 2021-06-28 23:39:54
-->

## ContactList

```tsx
import React, { useState } from 'react';
import { Chat, ContactItem, ContactList } from 'react-awesome-chat';
import { contact, contactList, messageList, my } from './fackData';

export default () => {
  return (
    <ContactList
      data={contactList}
      selected={contact.id}
      onSelect={(contact) => console.log(contact)}
    />
  );
};
```

## API

| 参数     | 说明                         | 类型              | 默认值 | 版本 |
| -------- | ---------------------------- | ----------------- | ------ | ---- |
| data     | 用户列表                     | Contact[]         | -      |      |
| selectId | 选中用户 id 传入后为受控模式 | string            | -      |      |
| onSelect | 点击用户事件                 | (contact) => void | -      |      |

## Contact

| 参数     | 说明                 | 类型          | 默认值 | 版本 |
| -------- | -------------------- | ------------- | ------ | ---- |
| id       | 用户唯一标识         | string        | -      |      |
| avatar   | 用户头像             | string        | -      |      |
| nickname | 用户名称             | string        | -      |      |
| desc     | 用户描述             | CSSProperties | -      |      |
| message  | 最近一条信息         | string        | -      |      |
| date     | 最近一条信息更新时间 | Date          | -      |      |
