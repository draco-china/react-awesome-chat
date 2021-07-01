<!--
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:43:03
 * @LastEditTime: 2021-07-01 22:27:56
-->

## 介绍

react-awesome-chat 是一个简单的 web 聊天组件。
是基于 `react-jwchat` 优化的 `TypeScript` 版本

## TO DO

- [x] 使用 `TypeScript` 重写, 并完善文档
- [x] 移除了原本的表情，图片上传，开放了 `tools` 自定义渲染
- [x] 设置加载更多事件后显示加载更多按钮
- [x] 移除了 `height/width` 设置 基于容器自动变化
- [x] 优化列表显示效果
  - [x] 加入滚动容器 `border` 设置 区分联系人列表和聊天记录列表样式
  - [x] 滚动条悬浮，不占用容器宽度
- [x] 联系人列表加入受控状态
- [x] 优化时间显示 具体请看 utils
- [ ] 完整的升级到 `HOOKS`
- 欢迎任何形式的贡献，有任何建议或意见，请 [提问](https://github.com/Draco-china/react-awesome-chat/issues)。

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
        <ContactList data={contactList} />
      </div>
      <div
        style={{
          width: 600,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <Chat
          to={contact}
          from={my}
          data={msgList}
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
