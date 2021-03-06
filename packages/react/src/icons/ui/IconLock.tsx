import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconLock: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M12 2a5 5 0 014.998 4.86L17 7v2h2v13H5V9h2V7a5 5 0 015-5zm5 9H7v9h10v-9zm-4 2v5h-2v-5h2zm-1-9a3 3 0 00-2.998 2.888L9 7v2h6V7a3 3 0 00-3-3z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconLock;
