<!--
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-26 00:57:45
 * @LastEditTime: 2021-07-01 22:29:57
-->

## Chat

```tsx
import React, { useState } from 'react';
import { Chat, ContactItem, ContactList } from 'react-awesome-chat';
import { contact, contactList, messageList, my } from './fackData';

export default () => {
  const [msgList, setMsgList] = useState(messageList);
  return (
    <Chat
      to={contact}
      from={my}
      data={msgList}
      onSend={(msg) => setMsgList([...msgList, msg])}
      onEarlier={() => console.log('EarlierEarlier')}
      style={{
        borderRadius: 5,
      }}
    />
  );
};
```

## API

| 参数      | 说明                                     | 类型                            | 默认值 | 版本 |
| --------- | ---------------------------------------- | ------------------------------- | ------ | ---- |
| from      | 当前用户信息                             | Contact                         | -      |      |
| to        | 联系用户信息                             | Contact                         | -      |      |
| data      | 消息列表                                 | ContactMessage[]                | -      |      |
| tools     | 工具栏                                   | ReactNode[]                     | -      |      |
| onSend    | 发送事件                                 | (msg: ContactMessage[]) => void | -      |      |
| onEarlier | 加载更多点击事件, 传入后显示加载更多按钮 | () => void                      | -      |      |

## Contact

| 参数     | 说明                 | 类型          | 默认值 | 版本 |
| -------- | -------------------- | ------------- | ------ | ---- |
| id       | 用户唯一标识         | string        | -      |      |
| avatar   | 用户头像             | string        | -      |      |
| nickname | 用户名称             | string        | -      |      |
| desc     | 用户描述             | CSSProperties | -      |      |
| message  | 最近一条信息         | string        | -      |      |
| date     | 最近一条信息更新时间 | Date          | -      |      |

## ContactMessage

| 参数    | 说明         | 类型    | 默认值 | 版本 |
| ------- | ------------ | ------- | ------ | ---- |
| \_id    | 消息唯一标识 | string  | -      |      |
| from    | 当前用户信息 | Contact | -      |      |
| to      | 联系用户信息 | Contact | -      |      |
| message | 用户消息     | Message | -      |      |
| date    | 发送信息时间 | Date    | -      |      |

## Message

| 参数    | 说明     | 类型                | 默认值 | 版本 |
| ------- | -------- | ------------------- | ------ | ---- |
| type    | 消息类型 | `'text' \| 'image'` | -      |      |
| content | 消息内容 | string              | -      |      |
