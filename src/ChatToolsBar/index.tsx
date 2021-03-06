/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:57:22
 * @LastEditTime: 2021-06-26 05:06:13
 */
import React, { Component } from 'react';

import './index.less';

type ChatToolBarProps = {
  tools?: React.ReactNode[];
};
export default class ChatToolBar extends Component<ChatToolBarProps, {}> {
  render() {
    return this.props.tools ? (
      <div className="chat-tools-bar-content">
        {this.props.tools.map((tool) => tool)}
      </div>
    ) : null;
  }
}
