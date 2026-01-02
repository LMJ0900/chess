'use client';

import LoginForm from '@/app/auth/login/_component/LoginForm';

import { bindClassNames } from '@/util/BindClassName';

import styles from './page.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className={cx('root')}>
      <LoginForm />
    </div>
  );
}
