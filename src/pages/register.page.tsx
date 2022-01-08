import React from 'react';
import RegisterStep from '../components/register-step';
import SelectRegisterMode from '../components/select-register-mode';


export default function RegisterPage() {
    return (
        <section className='mt-16 py-8'>
            <h5 className='rtl font-bold text-xl text-rose-500 px-2'>ثبت‌نام متقاضیان</h5>
            <RegisterStep />
            <SelectRegisterMode />
        </section>
    )
}