import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconCamera: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
  <svg
    className={classNames(styles.icon, styles[size], className)}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M14 3c1.093 0 1.707.327 2.538 1.127l.297.292c.442.43.661.558 1.045.578L18 5h1a4 4 0 013.995 3.8L23 9v7a4 4 0 01-3.8 3.995L19 20H5a4 4 0 01-3.995-3.8L1 16V9a4 4 0 013.8-3.995L5 5h1c.462 0 .68-.109 1.165-.581l.297-.292c.776-.747 1.362-1.081 2.326-1.123L10 3h4zm0 2h-4c-.462 0-.68.109-1.165.581l-.297.292c-.776.747-1.362 1.081-2.326 1.123L6 7H5a2 2 0 00-1.995 1.85L3 9v7a2 2 0 001.85 1.995L5 18h14a2 2 0 001.995-1.85L21 16V9a2 2 0 00-1.85-1.995L19 7h-1c-1.093 0-1.707-.327-2.538-1.127l-.297-.292c-.442-.43-.661-.558-1.045-.578L14 5zm-2 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm7-1a1 1 0 110 2 1 1 0 010-2z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconCamera;
