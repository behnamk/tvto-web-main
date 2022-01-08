import { Dialog, Transition } from '@headlessui/react';
import { DownloadIcon, XIcon } from '@heroicons/react/outline';

import React, { Fragment } from 'react';

interface Props {
    show: boolean;
    onCancel: () => void;
    onAccept: () => void;
}

export default function TermsModal(props: Props) {
    const minData = new Date();
    const maxData = new Date();
    const min = new Date(minData.setFullYear(minData.getFullYear() - 30)).toLocaleDateString('fa-IR').split('/')[0];
    const max = new Date(maxData.setFullYear(maxData.getFullYear() - 20)).toLocaleDateString('fa-IR').split('/')[0];

    return (
        <Transition
            show={props.show}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">
            <Dialog
                as="div"
                className="fixed inset-0 z-40 overflow-y-auto"
                onClose={props.onCancel}>
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 dark:bg-black opacity-75" />
                <div className="min-h-screen px-1 sm:px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true" />

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <div
                            className="inline-block w-full max-w-3xl p-3 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-xl">
                            <div className={`flex-row-reverse flex mb-2 items-center place-content-between pb-2 capitalize`
                            }>
                                <h4 className={`rtl font-bold md:text-lg text-blue-500`}>شرایط ثبت نام</h4>
                                <button
                                    className="flex flex-row text-blue-500 dark:hover:text-white hover:text-gray-800 p-1 w-min"
                                    onClick={props.onCancel}>
                                    <XIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="pr-2">
                                <ol className='list-decimal font-medium rtl text-right m-0 pr-4 leading-8 text-sm'>
                                    <li>جنسیت مرد</li>
                                    <li>{`بازه سنی ۲۰ تا ۳۰ سال (متولدین ${min} لغایت ${max}).`}</li>
                                    <li>بومی استان کرمانشاه (شهرستان‌های هدف مشتمل بر: اسلام آباد غرب، سنقر، کنگاور، روانسر و گيلانغرب دارای اولویت هستند).</li>
                                    <li>داشتن مدرک تحصیلی دیپلم در رشته‌های: ریاضی و فیزیک و گروه صنعت شاخه کاردانش و فنی و حرفه‌ای.</li>
                                    <li>ارائه کارت پایان خدمت نظام وظیفه یا معافیت دائم. (تبصره معافیت تحصیلی قابل پذیرش نمی‌باشد).</li>
                                    <li>رخورداری از شرایط جسمانی مناسب جهت کارهای عملیاتی واجرایی.</li>
                                    <li>
                                        <div className='flex items-center'>
                                            <h6 className=''>تکمیل و امضای فرم تعهدنامه</h6>
                                            <button className='flex items-center font-bold px-3 bg-blue-500 text-white rounded-full'>
                                                <DownloadIcon className='w-4 h-4' />
                                                <small>دریافت فرم</small>
                                            </button>
                                        </div>
                                    </li>
                                    <li>قبولی در آزمون ورودی و مصاحبه برای پذیرش متقاضیان مهارت آموزی.</li>
                                </ol>
                            </div>
                            <div className="pr-2">
                                <h5 className='text-rose-500 font-bold rtl text-right pt-8 pb-2'>نکات مهم ثبت‌نام</h5>
                                <ol className='list-decimal font-medium rtl text-right m-0 pr-4 leading-8 text-sm'>
                                    <li>علاقمندان حق ثبت نام در  یک رشته را دارند.</li>
                                    <li>
                                        رشته‌های مورد نیاز این طرح شامل موارد ذیل می‌باشد.
                                        <ul className='list-decimal font-medium rtl text-right m-0 pr-4 leading-8 text-xm text-salte-400'>
                                            <li>جوشکار ( در سه شاخه: برق-آرگون-کد)</li>
                                            <li>لوله کش صنعتی</li>
                                            <li>ابزار دقیق</li>
                                            <li>برق کار صنعتی</li>
                                        </ul>
                                    </li>
                                    <li>برای دارندگان مدرک تحصیلی بالاتر از دیپلم، مدرک دیپلم در نظر گرفته می‌شود.</li>
                                    <li>کلیه افراد دارای گواهینامه قبلی و قبول شدگان در دوره‌های آموزشی جدید، مي‌بايست تاییدیه مرکز توسعه مدیریت صنعت نفت را، دریافت نمایند.</li>
                                    <li>توانمندی کار دربخش‌های اجرایی و سلامت روان (داشتن تاییدیه از مرکز سلامت).</li>
                                    <li>سلامت رفتار.</li>
                                </ol>
                            </div>
                            <div className='flex flex-row items-center justify-between pt-8'>
                                <button className='button secondary px-6 py-2' onClick={props.onAccept}>شرایط و قوانین را قبول دارم</button>
                                <button className='button px-6 py-1 hover:text-rose-500' onClick={props.onCancel}>انصراف</button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}