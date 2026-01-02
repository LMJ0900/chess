'use client';

import StartSection from '@/app/(main)/_component/startSection/StartSection';

import { bindClassNames } from '@/util/BindClassName';

import styles from './page.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function RandingPage({}: Props) {
  return (
    <div className={cx('root')}>
      <StartSection />
    </div>
  );
}
