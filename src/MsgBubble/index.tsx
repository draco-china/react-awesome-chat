/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 23:03:52
 * @LastEditTime: 2021-06-29 01:38:53
 */
import React from 'react';
import { Message } from '../typings';
import classNames from 'classnames';
import RotateLeftOutlined from '@ant-design/icons/RotateLeftOutlined';
import RotateRightOutlined from '@ant-design/icons/RotateRightOutlined';
import ZoomInOutlined from '@ant-design/icons/ZoomInOutlined';
import ZoomOutOutlined from '@ant-design/icons/ZoomOutOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import Image from 'rc-image';

import './index.less';

type MsgBubbleProps = {
  data: Message;
  isMe: boolean;
};

export const icons = {
  rotateLeft: <RotateLeftOutlined />,
  rotateRight: <RotateRightOutlined />,
  zoomIn: <ZoomInOutlined />,
  zoomOut: <ZoomOutOutlined />,
  close: <CloseOutlined />,
  left: <LeftOutlined />,
  right: <RightOutlined />,
};

const MsgBubble: React.FC<MsgBubbleProps> = ({ data, isMe }) => {
  const renderContent = (message: Message) => {
    switch (message.type) {
      case 'text':
        return message.content;
      case 'image':
        return (
          <Image
            className="chat-msg-bubble-img_content"
            src={message.content}
            preview={{
              mask: false,
              icons,
            }}
          />
        );
      default:
        break;
    }
  };
  return (
    <div
      className={classNames(
        'chat-msg-bubble-text_content',
        'chat-msg-bubble-arrow',
        isMe ? 'chat-msg-bubble-arrow_right' : 'chat-msg-bubble-arrow_left',
      )}
    >
      {renderContent(data)}
    </div>
  );
};
export default MsgBubble;
