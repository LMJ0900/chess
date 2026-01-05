'use client';

import { useForm } from 'react-hook-form';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useMutation } from '@tanstack/react-query';

import { AuthMutation } from '@/api/domain/auth/Auth.mutaion';
import { SignInReq } from '@/api/domain/auth/request/SignInReq';

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

  const { mutate } = useMutation({
    mutationFn: (req: SignInReq) => AuthMutation.signIn(req),
  });

  const onSubmit = (data: LoginInputModel) => {
    const req = SignInReq.of({ email: data.email, password: data.password });
    mutate(req);
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
