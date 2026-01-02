'use client';

import { bindClassNames } from '@/util/BindClassName';

import styles from './ActionButton.module.css';

const cx = bindClassNames(styles);

type Props = {
  label: string;
  onClick: () => void;
  className?: string;
};

export default function ActionButton({ label, onClick, className }: Props) {
  return (
    <button className={cx('btn', className)} onClick={onClick}>
      <div>{label}</div>
    </button>
  );
}
