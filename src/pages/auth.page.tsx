import React, { useState } from 'react';

import TextInput from '../components/text.input';
import headerImage from '../assets/images/auth_header.svg';
import LoginButton from '../components/login.button';
import { useDispatch } from 'react-redux';
import { setAuthorizationState } from '../redux/authorization/action';

export default function AuthPage() {

    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const loginClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            var expire = new Date();
            expire.setDate(expire.getDate() + 1400);

            dispatch(setAuthorizationState({
                token: 'sample_token',
                refresh: 'sample_refresh_token',
                expireAt: expire
            }));
        }, 5000)
    }

    return (
        <>
            <div className='auth-card'>
                <img src={headerImage} className='max-h-48 sm:max-h-48 md:max-h-52' alt='معجزه ذهن' />
                <h5 className='font-bold text-center text-xl text-blue-400'>ورود به معجزه ذهن</h5>

                <TextInput
                    id='username'
                    title='نام کاربری'
                    placeholder='Username' />
                <TextInput
                    id='password'
                    title='کلمه عبور'
                    placeholder='Password' />

                <div className='pt-6 flex flex-row items-center justify-center'>
                    <LoginButton
                        title='ورود'
                        className='full-width-button'
                        loading={loading}
                        onClick={loginClick} />
                </div>

                <div className='pt-6 flex flex-row-reverse space-x-4 space-x-reverse text-sm font-medium items-center justify-center'>
                    <a href='/' className='text-blue-400 hover:text-blue-600'>ثبت نام در سایت</a>
                    <a href='/' className='text-blue-400 hover:text-blue-600'>بازیابی کلمه عبور</a>
                </div>
            </div>
            <footer className="pt-4 opacity-75 text-sm text-gray-500">
                copyright and other footer elements.
            </footer>
        </>
    )
}