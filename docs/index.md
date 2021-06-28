<!--
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:43:03
 * @LastEditTime: 2021-06-28 23:34:40
-->

## 介绍

react-awesome-chat 是一个简单的 web 聊天组件。
是基于 `react-jwchat` 优化的 `TypeScript` 版本

移除了 `height/width` 设置

### 安装

```bash
$ npm i react-awesome-chat
```

### 示例

```tsx
import React, { useState } from 'react';
import { Chat, ContactList } from 'react-awesome-chat';
import { contact, contactList, messageList, my } from './fackData';

const App = () => {
  const [msgList, setMsgList] = useState(messageList);

  const imageHandle = (imgs) => {
    console.log(imgs);
  };

  return (
    <div
      style={{
        background: '#2BA245',
        display: 'flex',
        justifyContent: 'center',
        height: '50vh',
        padding: '10vh 0',
      }}
    >
      <div
        style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          overflow: 'hidden',
          width: 256,
        }}
      >
        <ContactList data={contactList} select />
      </div>
      <div
        style={{
          width: 600,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Chat
          contact={contact}
          me={my}
          chatList={msgList}
          onSend={(msg) => setMsgList([...msgList, msg])}
          // onEarlier={() => console.log('EarlierEarlier')}
          onImage={imageHandle}
        />
      </div>
    </div>
  );
};

export default App;
```
