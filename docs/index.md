<!--
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:43:03
 * @LastEditTime: 2021-06-26 02:38:57
-->

## 介绍

react-awesome-chat 是一个简单的 web 聊天组件。
是基于 `react-jwchat` 优化的 `TypeScript` 版本

### 安装

```bash
$ npm i react-awesome-chat
```

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
        height: 500,
      }}
    >
      <ContactList
        data={contactList}
        border
        style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          overflow: 'hidden',
        }}
      />
      <Chat
        contact={contact}
        me={my}
        chatList={msgList}
        onSend={(msg) => setMsgList([...msgList, msg])}
        onEarlier={() => console.log('EarlierEarlier')}
        onImage={imageHandle}
        style={{
          width: 600,
          height: 500,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      />
    </div>
  );
};

export default App;
```
