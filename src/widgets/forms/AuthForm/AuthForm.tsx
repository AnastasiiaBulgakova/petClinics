import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Flex, Checkbox } from 'antd';
import classNames from 'classnames';

import FormWrapper from '../ui/FormWrapper/FormWrapper';
import FormTitle from '../ui/FormTitle/FormTitle';

import styles from './styles/AuthForm.module.scss';

import { useTheme } from '@/features';

interface AuthFormProps {
  onFinish: (values: { email: string; password: string; remember: boolean }) => Promise<void>;
}

const AuthForm: React.FC<AuthFormProps> = ({ onFinish }) => {
  const { theme } = useTheme();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
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

  return (
    <FormWrapper variant='auth'>
      <FormTitle mainTitle='Log in to your Account' secondaryTitle='Welcome back, please enter your details.' />
      <Form name='auth_form' onFinish={onFinish} initialValues={{ remember: true }} layout='vertical'>
        <div className={styles.inputSection}>
          <Form.Item
            label='Email Address'
            name='email'
            validateStatus={emailError ? 'error' : ''}
            help={emailError}
            rules={[{ required: true, type: 'email' }]}
            className={classNames(styles.label, styles[`label-${theme}`])}>
            <Input className={styles.input} onChange={handleEmailChange} />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Введите пароль!' }]}
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError}
            className={classNames(styles.label, styles[`label-${theme}`])}>
            <Input.Password className={styles.input} onChange={handlePasswordChange} />
          </Form.Item>

          <Form.Item>
            <Flex justify='space-between' align='center'>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox className={classNames(styles.checkbox, styles[`checkbox-${theme}`])}>Remember me</Checkbox>
              </Form.Item>
              <Link to='/' className={classNames(styles.forgotPasswordLink, styles[`forgotPasswordLink-${theme}`])}>
                Forgot password
              </Link>
            </Flex>
          </Form.Item>
        </div>

        <Form.Item>
          <Button className={styles.button} type='primary' htmlType='submit' block>
            Log in
          </Button>
        </Form.Item>

        <p className={classNames(styles.registerText, styles[`registerText-${theme}`])}>
          Don't have an account?{' '}
          <Link to='/' className={classNames(styles.registerLink, styles[`registerLink-${theme}`])}>
            Sign Up
          </Link>
        </p>
      </Form>
    </FormWrapper>
  );
};

export default AuthForm;
