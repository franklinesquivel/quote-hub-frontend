import { Button, Form, Input, message }                                                      from 'antd';
import { useState }                                                                          from 'react';
import { useLazyGetAccessTokenQuery, useLazyGetAuthUserDataQuery, useLazyGetCsrfTokenQuery } from '@/api';
import { setToken }                                                                          from '@/app';
import { useAppDispatch }                                                                    from '@/hooks';
import { UserLogin }                                                                         from '@/types';
import './LoginForm.css';


export const LoginForm = () => {

    const [getAccessToken, { isLoading: loadingAccessToken }] = useLazyGetAccessTokenQuery();
    const [getCsrfToken, { isLoading: loadingCsrfToken }] = useLazyGetCsrfTokenQuery();
    const [getAuthUserInfo] = useLazyGetAuthUserDataQuery();
    const [messageError, setMessageError] = useState('');
    const [messageApi, contextHelper] = message.useMessage();
    const dispatch = useAppDispatch();

    const onFinish = async (userData: UserLogin) => {
        try {
            await getCsrfToken(null).unwrap();
            getAccessToken(userData)
                .unwrap()
                .then(token => {
                    dispatch(setToken(token));
                    getAuthUserInfo(token);
                })
                .catch(error => {
                    setMessageError(error.data.message);
                });
        } catch ( err ) {
            messageApi.open({
                type: 'error',
                content: 'A server error occurred!!!'
            });
        }
    };

    return (
        <>
            { contextHelper }

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
                        loading={ loadingAccessToken || loadingCsrfToken }
                        type='primary'
                    >
                        Login
                    </Button>

                </Form.Item>
            </Form>
        </>
    );
};