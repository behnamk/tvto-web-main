import React, { useState } from 'react';
import { AcademicCapIcon, DocumentTextIcon, IdentificationIcon, LightBulbIcon, QuestionMarkCircleIcon, ScaleIcon, UserGroupIcon } from '@heroicons/react/outline';

import HomeHeader from '../components/home-header';
import TermsModal from '../components/terms-modal';
import { useHistory } from 'react-router-dom';

type RegisterMode = 'NEW' | 'EXIST';

export default function IndexPage() {

    const [showTerms, setShowTerms] = useState<boolean>(false);
    const history = useHistory();

    const onTermsAccept = () => {
        history.push('/register')
    }

    const onTermsCancel = () => {
        setShowTerms(false);
    }

    const registerClicked = (mode: RegisterMode) => {
        setShowTerms(true);
    }

    return (
        <>
            <HomeHeader onRegisterClick={() => registerClicked('NEW')} />
            <section className='container mx-auto flex flex-wrap px-1 py-8'>
                <div className='w-full md:w-1/2 p-2 flex flex-col flex-grow flex-shrink rounded-2xl'>
                    <h5 className='pb-4 flex flex-row-reverse space-x-2 space-x-reverse items-center text-blue-500'>
                        <QuestionMarkCircleIcon className='w-10 h-10' />
                        <div className='text-xl font-bold text-right rtl'>درباره سامانه</div>
                    </h5>
                    <p className='font-medium rtl text-justify leading-8 px-2'>
                        در سال تولید، پشتیبانی و مانع زداییها، با تاییدات خداوند متعال، در راستای توانمند سازی نیروهای بومی استان و ایجاد توسعه پایدار در مناطق نفت خیز (استان کرمانشاه) و طبق تفاهم نامه سه جانبه في ما بین مدیریت نظارت بر طرح های عمرانی مناطق نفت خیز شرکت ملی نفت، سازمان آموزش فنی وحرفه ای کشور و استانداری کرمانشاه، اداره آموزش فنی وحرفه ای کرمانشاه درصدد شناسایی، آموزش وتوانمندسازی 2500 نفر از نیروهای مستعد و کارآمد بومی در حوزه های لوله كش صنعتي، جوشكار (كد، آرگون و برق)، برق كارصنعتي و ابزار دقيق می باشد.
                    </p>
                    {/* <p className='pt-6 font-medium rtl text-justify'>
                        لازم به ذکر است افراد دارای گواهینامه هاي مرتبط در هریک از رشته های مورد نیاز، جهت شناسایی و تایید صلاحیت ملزم به ثبت نام در بخش «دارندگان گواهینامه» فراخوان می باشند.
                    </p> */}
                </div>
                <div className='w-full md:w-1/2 p-2 flex flex-col flex-grow flex-shrink rounded-2xl'>
                    <h5 className='pb-4 flex flex-row-reverse space-x-2 space-x-reverse items-center text-blue-500'>
                        <LightBulbIcon className='w-10 h-10' />
                        <div className='text-xl font-bold text-right rtl'>اهداف سامانه</div>
                    </h5>
                    <div className='font-normal list-none flex flex-col space-y-4 pt-4 h-full px-2'>
                        <div className='flex flex-row-reverse space-x-reverse justify-start items-start space-x-2'>
                            <AcademicCapIcon className='icon-2rem text-salte-400' />
                            <p className='rtl text-justify font-medium'>ارتقاء سطح مهارت نیروهای بومی منطقه که از شایستگی‌های فنی و رفتاری لازم دررشته‌هاي جوشکاری، لوله‌کشی صنعتی، برق و ابزار دقیق برخوردارند.</p>
                        </div>
                        <div className='flex flex-row-reverse space-x-reverse justify-start items-start space-x-2'>
                            <IdentificationIcon className='icon-2rem text-salte-400' />
                            <p className='rtl text-justify font-medium'>ارائه و صدور گواهینامه معتبر برای افرادی که موفق به گذراندن دوره‌های آموزشی و قبولی در آزمون‌های مربوطه شوند.</p>
                        </div>
                        <div className='flex flex-row-reverse space-x-reverse justify-start items-start space-x-2'>
                            <UserGroupIcon className='icon-2rem text-salte-400' />
                            <p className='rtl text-justify font-medium'>شناسایی، رتبه‌بندی و ایجاد بانک اطلاعاتی از افراد ذی‌صلاح.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full bg-blue-500 py-6 flex flex-col items-center justify-center px-3'>
                <h5 className='container mx-auto text-center rtl font-medium text-base text-white'>افراد دارای گواهینامه‌هاي مرتبط در هریک از رشته‌های مورد نیاز، جهت شناسایی و تایید صلاحیت ملزم به ثبت نام در بخش «دارندگان گواهینامه» فراخوان می باشند.</h5>
                <button className='button secondary mt-4 px-8 py-2 text-lg' onClick={() => registerClicked('EXIST')}>شروع ثبت نام</button>
            </section>
            <section className='container mx-auto flex flex-col items-end px-3 py-8'>
                <h5 className='pb-4 flex flex-row-reverse space-x-2 space-x-reverse items-center'>
                    <DocumentTextIcon className='w-10 h-10' />
                    <div className='text-xl font-bold text-right rtl'>آیین نامه انضباطی کارآموزان آموزش فنی وحرفه‌ای</div>
                </h5>
                <p className='rtl text-justify font-medium pr-2'>
                    نظر به رعایت نظم و انضباط در محیط‌های آموزشی و قداست آن این آیین نامه به استناد بخشنامه شماره یک مشترک سازمان آموزش فنی و حرفه‌ای کشور تصویب ومورد اجرا قرار می گیرد.
                </p>
                <ul className='list-disc rtl font-medium pr-8 pt-4 leading-8'>
                    <li>جرائم عمومی کارآموزان از قبیل تهدید، سرقت، توهین، تهمت، ضرب وجرح و... .</li>
                    <li>عدم حضور به موقع در کارگاه.</li>
                    <li>عدم استفاده از لباس کار و لوازم حفاظتی.</li>
                    <li>انجام حرکات غیر متعارف وخارج از شئونات مکان آموزشی.</li>
                    <li>غیبت غیر موجه.</li>
                    <li>ایراد خسارات به اموال مرکز و بیت المال که در صورت ایجاد خسارت ملزم به جبران خسارت و پرداخت هزینه می باشد.</li>
                    <li>عدم تحویل وسایل تحویلی به صورت صحیح و سالم در طول دوره.</li>
                    <li>ایجاد آشوب و تحریک و اشاعه کذب در محیط مرکز.</li>
                    <li>عدم رعایت شئونات اسلامی.</li>
                    <li>استعمال دخانیات ومواد مخدر یا شرب خمر واین گونه موارد.</li>
                    <li>استفاده و اشاعه خاج از عرف ومستهجن  خصوصا در فضای مجازی.</li>
                </ul>
            </section>
            <section className='px-3 py-8 w-full bg-rose-600 text-white'>
                <div className='container mx-auto flex flex-col items-end'>
                    <h5 className='pb-4 flex flex-row-reverse space-x-2 space-x-reverse items-center'>
                        <ScaleIcon className='w-10 h-10' />
                        <div className='text-xl font-bold text-right rtl'>نحوه ارزیابی و مصاحبه</div>
                    </h5>
                    <p className='rtl text-justify font-medium pr-2'>
                        متقاضیان پس از ثبت نام و قبولی در آزمون ورودی و مصاحبه و ارزیابی سلامت جسم و روان و نیز ارزیابی مهارت‌های اولیه و پذیرش قوانین حضور در دوره به عنوان کار آموز پذیرفته خواهند شد.
                    </p>
                    <ul className='list-disc rtl font-medium pr-8 pt-4 leading-8'>
                        <li>افراد دارای امتیاز بالاتردر مصاحبه و آزمون ورودی، در  اولویت پذیرش در دوره‌ها می باشند.</li>
                        <li>کلیه پذیرفته شدگان به عنوان کارآموز ملزم به گذراندن کل دوره و حضور در آزمون پایان دوره می‌باشند.</li>
                        <li>افراد پذيرفته شده ملزم به ارائه تعهد محضري برای شركت در كل دوره و جبران خسارت در صورت ترك دوره خواهند بود.</li>
                        <li>امتیاز مصاحبه و آزمون ورودی قطعي جهت حضور در دوره‌های آموزشی از طریق پیامک به ایشان اعلام خواهد شد.</li>
                    </ul>
                </div>
            </section>
            <TermsModal onAccept={onTermsAccept} onCancel={onTermsCancel} show={showTerms} />
        </>
    )
}