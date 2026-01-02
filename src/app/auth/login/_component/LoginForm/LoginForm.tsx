'use client';

import { useForm } from 'react-hook-form';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import ActionButton from '@/app/(main)/_component/ActionButton';
import { LoginInputModel } from '@/app/auth/login/_component/LoginForm/model/LoginInputModel';

import InputBox from '@/component/Input/InputBox';

import { bindClassNames } from '@/util/BindClassName';

import styles from './LoginForm.module.css';

const cx = bindClassNames(styles);

type Props = {};

export default function LoginForm({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginInputModel>({
    mode: 'all',
    resolver: classValidatorResolver(LoginInputModel),
  });

  const onSubmit = (data: LoginInputModel) => {
    console.log('submit:', data);
  };

  return (
    <div className={cx('root')}>
      <div className={cx('title')}>Login</div>
      <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          inputRegisterReturn={register('email')}
          label="Email"
          inputType="email"
          inputId="email"
          placeholder="username@gmail.com"
          currentInputValue={watch().email}
          errorMessage={errors.email?.message}
        />
        <InputBox
          inputRegisterReturn={register('password')}
          label="Password"
          inputType="password"
          inputId="password"
          placeholder="Password"
          currentInputValue={watch().password}
          errorMessage={errors.password?.message}
        />
      </form>
      <ActionButton className={cx('submitBtn')} label="submit" onClick={handleSubmit(onSubmit)} />
    </div>
  );
}
