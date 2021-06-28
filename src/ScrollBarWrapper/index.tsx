/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-25 21:57:55
 * @LastEditTime: 2021-06-29 00:20:01
 */
import React from 'react';
import { Contact } from '../typings';

import './index.less';

type WrapperProps = {
  data?: any[];
  onSelect?: (contact: Contact) => void;
  bottom?: boolean;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
};
type ScrollBarWrapperProps = any & React.RefAttributes<HTMLDivElement>;

export default function ScrollBarWrapper(
  Wrapped: React.ForwardRefExoticComponent<ScrollBarWrapperProps>,
) {
  return class extends React.Component<WrapperProps> {
    state: {
      resizeObserver?: ResizeObserver;
      clientHeight: number;
      thumbHeight: number;
      scrollTop: number;
      isBarHide: boolean;
      c_s: number;
    } = {
      resizeObserver: undefined,
      clientHeight: 0,
      thumbHeight: 0,
      scrollTop: 0,
      isBarHide: false,
      c_s: 0,
    };
    scrollRef = React.createRef<any>();
    componentDidMount() {
      const resizeObserver = new ResizeObserver((entries) => {
        this.computeHeight();
      });
      this.setState({ resizeObserver }, () => {
        this.state.resizeObserver?.observe(this.scrollRef.current);
      });
    }
    componentWillUnmount() {
      this.state.resizeObserver?.unobserve(this.scrollRef.current);
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
        <div
          className={`chat-scroll-bar-wrapper-content ${this.props.className}`}
        >
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
            className="chat-scroll-bar-wrapper-scroll_bar_track"
            style={{ display: isBarHide ? 'none' : 'block' }}
          >
            <span
              className="chat-scroll-bar-wrapper-scroll_bar_thumb"
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
