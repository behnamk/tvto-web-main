import { AcademicCapIcon, ClipboardCheckIcon, IdentificationIcon, LocationMarkerIcon, UserIcon } from '@heroicons/react/outline';
import React from 'react';

export default function RegisterStep() {
    return (
        <section className='wizard-steps'>
            <button className='active'>
                <ClipboardCheckIcon className='w-6 h-6' />
                <small>نوع ثبت‌نام</small>
            </button>
            <hr />
            <button>
                <UserIcon className='w-6 h-6' />
                <small>مشخصات فردی</small>
            </button>
            <hr />
            <button>
                <AcademicCapIcon className='w-6 h-6' />
                <small>تحصیلات</small>
            </button>
            <hr />
            <button>
                <IdentificationIcon className='w-6 h-6' />
                <small>خدمت سربازی</small>
            </button>
            <hr />
            <button>
                <LocationMarkerIcon className='w-6 h-6' />
                <small>تماس و محل سکونت</small>
            </button>
        </section>
    )
}