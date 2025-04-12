import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Form, Input, Button, Flex, Checkbox } from 'antd';

import FormWrapper from '../ui/FormWrapper/FormWrapper';
import FormTitle from '../ui/FormTitle/FormTitle';

import styles from './RegForm.module.scss';

import { useTheme } from '@/features';

interface RegFormProps {
  onFinish: (values: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    remember: boolean;
  }) => Promise<void>;
}

const RegForm: React.FC<RegFormProps> = ({ onFinish }) => {
  const { theme } = useTheme();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullNameError(value ? null : 'Введите полное имя!');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(isValidEmail ? null : 'Введите корректный email!');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) {
      setPasswordError('Введите пароль!');
    } else {
      setPasswordError(null);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>, password: string) => {
    const value = e.target.value;
    setConfirmPasswordError(value === password ? null : 'Пароли не совпадают!');
  };
  return (
    <FormWrapper variant='reg'>
      <FormTitle mainTitle='Create an Account' secondaryTitle='Sign up now to get started with an account.' />
      <Form name='reg_form' onFinish={onFinish} initialValues={{ remember: false }} layout='vertical'>
        <Form.Item
          name='fullname'
          label='Full Name'
          validateStatus={fullNameError ? 'error' : ''}
          help={fullNameError}
          className={styles.label}
          rules={[{ required: true, message: 'Введите имя!' }]}>
          <Input className={styles.input} onChange={handleFullNameChange} />
        </Form.Item>

        <Form.Item
          label='Email Address'
          name='email'
          validateStatus={emailError ? 'error' : ''}
          help={emailError}
          rules={[{ required: true, type: 'email', message: 'Введите корректный email!' }]}
          className={styles.label}>
          <Input className={styles.input} onChange={handleEmailChange} />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Введите пароль!' }]}
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError}
          className={styles.label}>
          <Input.Password className={styles.input} onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item
          label='Confirm Password'
          name='confirmPassword'
          rules={[{ required: true, message: 'Подтвердите пароль!' }]}
          validateStatus={confirmPasswordError ? 'error' : ''}
          help={confirmPasswordError}
          className={styles.label}>
          <Input.Password className={styles.input} onChange={e => handleConfirmPasswordChange(e, '')} />
        </Form.Item>

        <Form.Item>
          <Flex justify='space-between' align='center'>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox className={styles.terms}>
                I have read and agree to the{' '}
                <Link to='/' className={classNames(styles.termsLink, styles[`termsLink-${theme}`])}>
                  Terms of Service
                </Link>
              </Checkbox>
            </Form.Item>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button
            className={classNames(styles.button, styles[`button-${theme}`])}
            type='primary'
            htmlType='submit'
            block>
            Get Started
          </Button>
        </Form.Item>

        <p className={styles.loginText}>
          Already have an account?{' '}
          <Link to='/' className={classNames(styles.loginLink, styles[`loginLink-${theme}`])}>
            Log in
          </Link>
        </p>
      </Form>
    </FormWrapper>
  );
};

export default RegForm;
