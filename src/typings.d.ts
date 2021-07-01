/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 20:18:47
 * @LastEditTime: 2021-07-01 22:24:01
 */
export interface Contact {
  id: string;
  avatar: string;
  nickname: string;
  desc?: string;
  // 最近一条信息
  message?: string;
  // 信息更新时间
  date?: Date | string | number;
}

export interface Message {
  type: 'text' | 'image';
  content: string;
}

export interface ContactMessage {
  _id: string;
  from: Contact;
  to: Contact;
  message: Message;
  date: Date | string | number;
}
