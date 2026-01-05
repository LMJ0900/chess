'use client';

import { bindClassNames } from '@/util/BindClassName';

import styles from './page.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function ApplicationPage({}: Props) {
  return <div className={cx('root')}>회원가입페이지</div>;
}
