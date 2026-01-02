'use client';

import { bindClassNames } from '@/util/BindClassName';

import styles from './InputErrorMessage.module.css';

const cx = bindClassNames(styles);

type Props = {
  errorMessage?: string;
};

export default function InputErrorMessage({ errorMessage }: Props) {
  if (!errorMessage) return;
  return <div className={cx('error')}>{errorMessage}</div>;
}
