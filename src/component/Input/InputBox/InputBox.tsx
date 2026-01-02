'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

import { bindClassNames } from '@/util/BindClassName';

import styles from './InputBox.module.css';
import InputErrorMessage from '../InputErrorMessage';

const cx = bindClassNames(styles);

type Props = {
  label: string;
  inputId: string;
  inputType: string;
  inputRegisterReturn: UseFormRegisterReturn;
  placeholder: string;
  currentInputValue?: string;
  errorMessage?: string;
};

export default function InputBox({ label, inputId, inputType, placeholder, inputRegisterReturn, errorMessage }: Props) {
  return (
    <div>
      <div className={cx('root')}>
        <div className={cx('label')}>{label}</div>
        <input className={cx('box')} id={inputId} {...inputRegisterReturn} type={inputType} placeholder={placeholder} />
      </div>
      <InputErrorMessage errorMessage={errorMessage} />
    </div>
  );
}
