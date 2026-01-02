'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import ActionButton from '@/app/(main)/_component/ActionButton';

import { bindClassNames } from '@/util/BindClassName';

import styles from './StartSection.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function StartSection({}: Props) {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };

  return (
    <div className={cx('root')}>
      <Image className={cx('background')} src="/images/startBack.png" width={2000} height={2000} alt="배경이미지" />
      <div className={cx('contain')}>
        <div className={cx('textBox')}>
          <div className={cx('title')}>체스 닷컴</div>
          <div className={cx('describe')}>가입하고 다양한 회원들과 체스를 즐겨보세요.</div>
        </div>
        <div className={cx('btnBox')}>
          <ActionButton label="Login" onClick={handleLogin} />
          <ActionButton className={cx('join')} label="Create an account" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}
