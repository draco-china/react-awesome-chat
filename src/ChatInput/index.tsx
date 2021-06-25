/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:56:56
 * @LastEditTime: 2021-06-26 00:30:41
 */
import React, { Component } from 'react';
import style from './index.css';
import md5 from 'md5';
import dayjs from 'dayjs';
import ChatToolBar from '../ChatToolsBar';
import { Contact, ContactMessage } from '@/typings';

type ChatInputProps = {
  onSend: (msgData: ContactMessage) => void;
  me: Contact;
  height: number;
  tools?: React.ReactNode[];
};

type ChatInputState = {
  text: string;
  isShift: boolean;
  isAllowSend: boolean;
};

export default class ChatInput extends Component<
  ChatInputProps,
  ChatInputState
> {
  state = {
    text: '',
    isShift: false,
    isAllowSend: false,
  };
  textArea = React.createRef();

  componentDidMount() {
    // console.log(md5('123'));
  }

  textChangeHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const isAllowSend = !!e.target.value.trim();
    const text = e.target.value;
    this.setState({ text, isAllowSend });
  };

  sendHandle = () => {
    if (!this.state.isAllowSend) {
      return;
    }
    const randomNum = Math.floor(Math.random() * 1000);
    const date = dayjs().unix();
    const msgData: ContactMessage = {
      _id: md5(`${this.state.text}${date}${randomNum}`),
      date: date,
      user: this.props.me,
      message: {
        type: 'text',
        content: this.state.text,
      },
    };
    this.props.onSend(msgData);
    this.resetText();
  };

  resetText = () => this.setState({ text: '', isAllowSend: false });

  keyDownHandle = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 16) {
      this.setState({ isShift: true });
    }
    if (e.keyCode === 13 && !this.state.isShift) {
      e.preventDefault();
      this.sendHandle();
    }
  };
  keyUpHandle = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 16) {
      this.setState({ isShift: false });
    }
  };

  render() {
    return (
      <div className={style.content} style={{ height: this.props.height }}>
        <ChatToolBar tools={this.props.tools} />
        <textarea
          className={style.input_area}
          onKeyUp={this.keyUpHandle}
          onKeyDown={this.keyDownHandle}
          onChange={this.textChangeHandle}
          value={this.state.text}
          placeholder="请输入..."
        />
        <div className={style.but_area}>
          <button
            className={style.but}
            onClick={this.sendHandle}
            disabled={!this.state.isAllowSend}
          >
            发送
          </button>
        </div>
      </div>
    );
  }
}
