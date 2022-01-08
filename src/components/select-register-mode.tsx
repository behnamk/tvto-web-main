import React from 'react';

interface Props {

}

export default function SelectRegisterMode(props: Props) {
    return (
        <section className='py-16 container mx-auto px-4'>
            <p className='rtl font-medium py-6 text-justify'>متقاضی محترم چنانچه در گدشته مدارک رشته‌های مورد نیاز را اخد کرده اید بر رویگزینه دارندگان گواهینامه کلیک کرده وسریال مربوط به مدرک اخد شده را با مشخصات خواسته شده وارد کنید وچنانچه متقاضی گدراندن دوره در حرفه های مورد اموزش میباشید برروی دکمه ثبتنام کارآموز کلیک کنید ومشخصات خواسته شده را وارد نمایید.</p>
            <div className='flex items-center justify-around space-x-2 pt-6'>
                <button className='button secondary px-6 py-2 text-xl'>ثبت‌نام کارآموز</button>
                <button className='button secondary px-6 py-2 text-xl'>دارنده گواهینامه</button>
            </div>
        </section>
    )
}