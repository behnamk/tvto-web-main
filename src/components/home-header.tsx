import React from 'react';

import person from '../assets/images/worker-person.svg';
import nioc from '../assets/images/nioc-logo.svg';
import tvto from '../assets/images/tvto-dark-logo.svg';
import ir from '../assets/images/ir-logo.svg';

interface Props {
    onRegisterClick: () => void;
}

export default function HomeHeader(props: Props) {
    return (
        <section className='home-header'>
            <div className='container px-3 py-4 mx-auto flex flex-wrap flex-col-reverse md:flex-row-reverse items-center justify-between'>
                <div className='flex flex-col items-center md:items-end justify-start max-w-sm pt-4 md:pt-1'>
                    <h6 className='font-medium text-rose-600 md:text-rose-500 rtl'>سال تولید، پشتیبانی و مانع زداییها</h6>
                    <h1 className='font-bold text-blue-600 md:text-blue-500 text-xl md:text-2xl pt-2 rtl'>سامانه جامع آموزش مشاغل</h1>
                    <h5 className='font-medium rtl text-center md:text-justify py-2 text-salte-600'>افراد دارای گواهینامه هاي مرتبط در هریک از رشته های مورد نیاز، جهت شناسایی و تایید صلاحیت ملزم به ثبت نام در بخش «دارندگان گواهینامه» فراخوان می باشند.</h5>
                    <button className='button secondary px-6 py-1' onClick={props.onRegisterClick}>شروع ثبت نام</button>
                </div>
                <div className='flex flex-col space-y-8'>
                    <div className='flex flex-row space-x-4 items-center justify-around md:justify-start md:items-start'>
                        <img src={tvto} alt='سازمان فنی و حرفه‌ای' className='header-link-logo' />
                        <img src={ir} alt='جمهوری اسلامی ایران' className='header-link-logo' />
                        <img src={nioc} alt='شرکت نفت' className='header-link-logo' />
                    </div>
                    <img src={person} className='max-h-64 md:max-h-96 max-w-xs' alt='' />
                </div>
            </div>
        </section>
    )
}