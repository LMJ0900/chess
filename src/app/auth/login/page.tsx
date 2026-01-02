'use client';

import Image from 'next/image';

import LoginForm from '@/app/auth/login/_component/LoginForm';

import { bindClassNames } from '@/util/BindClassName';

import styles from './page.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className={cx('root')}>
      <div className={cx('contain')}>
        <LoginForm />
        <Image src="/images/login.png" alt="로그인 배경이미지" width={674} height={593} />
      </div>
    </div>
  );
}
