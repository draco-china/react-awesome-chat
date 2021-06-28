/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:57:32
 * @LastEditTime: 2021-06-29 00:02:44
 */
import React from 'react';
import MsgItem from '../MsgItem';
import ScrollBarWrapper from '../ScrollBarWrapper';
import { Contact, ContactMessage } from '../typings';
import classNames from 'classnames';

import './index.less';

type ChatRecordListProps = {
  data?: ContactMessage[];
  me: Contact;
  isBarHide: boolean;
  scrollTop: number;
  thumbHeight: number;
  clientHeight: number;
  onScroll?: () => void;
  onEarlier?: () => void;
};

const ChatRecordList = React.forwardRef<HTMLDivElement, ChatRecordListProps>(
  (props, ref) => {
    const renderShadow = () => {
      const { isBarHide, scrollTop, thumbHeight, clientHeight } = props;
      if (isBarHide) {
        return '';
      }
      if (scrollTop !== 0 && clientHeight - (scrollTop + thumbHeight) !== 0) {
        return 'chat-record-list-shadow_vertical';
      }
      if (scrollTop === 0) {
        return 'chat-record-list-shadow_bottom';
      }
      if (scrollTop + thumbHeight === clientHeight) {
        return 'chat-record-list-shadow_top';
      }
    };
    return (
      <div
        className={classNames('chat-record-list-list_area', renderShadow())}
        ref={ref}
        onScroll={props.onScroll}
      >
        {props.onEarlier && (
          <div className="chat-record-list-load_more_area">
            <button
              className="chat-record-list-load_more"
              onClick={props.onEarlier}
            >
              加载更多···
            </button>
          </div>
        )}
        {props.data?.map((bubble) => (
          <MsgItem me={props.me} data={bubble} key={bubble._id} />
        ))}
      </div>
    );
  },
);

export default ScrollBarWrapper(ChatRecordList);
