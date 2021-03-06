import React from 'react';

import { IconProps } from '../Icon.interface';
import classNames from '../../utils/classNames';
import styles from '../Icon.module.css';

const IconClockCross: React.FC<IconProps> = ({ size = 's', className = '', style = {}, ...rest }: IconProps) => (
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
        d="M12 2c5.523 0 10 4.477 10 10 0 .168-.004.335-.012.501h-2.003A8 8 0 1013 19.938v2.012c-.33.032-.663.049-1.001.049-5.523 0-10-4.477-10-10S6.477 2 12 2zm8.621 12.464l1.415 1.415L19.914 18l2.122 2.121-1.415 1.415-2.121-2.122-2.121 2.122-1.415-1.415L17.086 18l-2.122-2.121 1.415-1.415 2.121 2.122 2.121-2.122zM13 6v6.414l-.295.292.002.001-3.535 3.536-1.415-1.415L11 11.584 11 6h2z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default IconClockCross;
