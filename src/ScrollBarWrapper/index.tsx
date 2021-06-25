/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:57:55
 * @LastEditTime: 2021-06-26 03:26:19
 */
import React from 'react';
import { ContactMessage, Contact } from '@/typings';

import style from './index.less';

type WrapperProps = {
  data?: ContactMessage[] | Contact[];
  onSelect?: (contact: Contact) => void;
  bottom: boolean;
  height: number;
  style?: React.CSSProperties;
};
type ScrollBarWrapperProps = any & React.RefAttributes<HTMLDivElement>;

export default function ScrollBarWrapper(
  Wrapped: React.ForwardRefExoticComponent<ScrollBarWrapperProps>,
) {
  return class extends React.Component<WrapperProps> {
    state = {
      clientHeight: 0,
      thumbHeight: 0,
      scrollTop: 0,
      isBarHide: false,
      c_s: 0,
    };
    scrollRef = React.createRef<any>();
    componentDidMount() {
      this.computeHeight();
    }
    componentDidUpdate(prevProps: { data?: unknown[] }) {
      if (prevProps.data?.length !== this.props.data?.length) {
        this.computeHeight();
      }
    }
    computeHeight = () => {
      const clientHeight = this.scrollRef.current.clientHeight;
      const scrollHeight = this.scrollRef.current.scrollHeight;
      const isBarHide = clientHeight === scrollHeight;
      const c_s = clientHeight / scrollHeight;
      const thumbHeight = c_s * clientHeight;
      this.setState(
        { clientHeight, scrollHeight, thumbHeight, c_s, isBarHide },
        () => {
          if (this.props.bottom) {
            this.scrollToBottom();
          }
        },
      );
    };
    scrollToBottom = () => {
      this.scrollRef.current.scrollTop =
        this.scrollRef.current.scrollHeight -
        this.scrollRef.current.clientHeight;
    };
    scrollHandle = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      // @ts-ignore
      this.setState({ scrollTop: e.target.scrollTop * this.state.c_s });
    };
    render() {
      const { scrollTop, thumbHeight, isBarHide, clientHeight } = this.state;
      return (
        <div className={style.content} style={this.props.style}>
          <Wrapped
            {...this.props}
            ref={this.scrollRef}
            isBarHide={isBarHide}
            scrollTop={scrollTop}
            thumbHeight={thumbHeight}
            clientHeight={clientHeight}
            onScroll={this.scrollHandle}
          />
          <div
            className={style.scroll_bar_track}
            style={{ display: isBarHide ? 'none' : 'block' }}
          >
            <span
              className={style.scroll_bar_thumb}
              style={{
                height: thumbHeight,
                top: scrollTop,
              }}
            />
          </div>
        </div>
      );
    }
  };
}
