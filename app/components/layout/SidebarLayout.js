// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import { observer } from 'mobx-react';
import styles from './SidebarLayout.scss';

type Props = {
  children: any | Node,
  sidebar: Node,
  topbar: Node,
  notification?: ?Node,
  contentDialog?: ?Node,
};

@observer
export default class SidebarLayout extends Component<Props> {

  static defaultProps = {
    children: null
  };

  render() {
    const { children, sidebar, topbar, notification, contentDialog } = this.props;
    return (
      <div className={styles.component}>
        <div className={styles.sidebar}>
          {sidebar}
        </div>
        <div className={styles.main}>
          <div className={styles.topbar}>
            {topbar}
          </div>
          {notification}
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {children}
            </div>
            {contentDialog}
          </div>
        </div>
      </div>
    );
  }
}
