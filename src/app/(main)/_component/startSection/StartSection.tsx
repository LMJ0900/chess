'use client';

import Image from 'next/image';

import { bindClassNames } from '@/util/BindClassName';

import styles from './StartSection.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function StartSection({}: Props) {
  return (
    <div className={cx('root')}>
      <Image className={cx('background')} src="/images/startBack.png" width={2000} height={2000} alt="배경이미지" />
    </div>
  );
}
