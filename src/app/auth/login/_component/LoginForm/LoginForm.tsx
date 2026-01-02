'use client';

import { bindClassNames } from '@/util/BindClassName';

import styles from './LoginForm.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function LoginForm({}: Props) {
  return (
    <div className={cx('root')}>
      <div>component</div>
    </div>
  );
}
