import { Button, Form, Input }        from 'antd';
import { useState }                   from 'react';
import { useLazyGetAccessTokenQuery } from '@/api';
import { setToken }                   from '@/app';
import { useAppDispatch }             from '@/hooks';
import { LoginPayload }               from '@/types';
import './LoginForm.css';


export const LoginForm = () => {

    const [getAccessToken, { isLoading }] = useLazyGetAccessTokenQuery();
    const [messageError, setMessageError] = useState('');
    const dispatch = useAppDispatch();

    const onFinish = async (userData: LoginPayload) => {
        try {
            const token = await getAccessToken(userData).unwrap();
            dispatch(setToken(token));
        } catch ( err ) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setMessageError(err.data.message);
        }
    };

    return (
        <Form
            autoComplete='off'
            initialValues={ { remember: true } }
            name='basic'
            onFinish={ onFinish }
        >
            <Form.Item
                label='Username or email'
                name='user_identifier'
                rules={ [{ required: true, message: 'Please input your username or email!' }] }
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={ [{ required: true, message: 'Please input your password!' }] }
            >
                <Input.Password />
            </Form.Item>

            <div className='login-error'>
                {
                    messageError && <span className='login-error-message'>{ messageError }</span>
                }
            </div>

            <Form.Item wrapperCol={ { offset: 10 } }>
                <Button
                    htmlType='submit'
                    loading={ isLoading }
                    type='primary'
                >
                    Login
                </Button>

            </Form.Item>
        </Form>
    );
};