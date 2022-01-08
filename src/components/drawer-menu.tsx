import React from 'react';
import { ChatAlt2Icon, FlagIcon, FolderOpenIcon, HomeIcon, InformationCircleIcon, ScaleIcon } from '@heroicons/react/outline';

export default function DrawerMenu() {
    return (
        <div className='flex flex-col space-y-1 items-stretch justify-start pr-4'>
            <button className='drawer-menu-item'>
                <HomeIcon className='w-5 h-5' />
                <span>دشبورد</span>
            </button>
            <a className='drawer-menu-item' href='./competition'>
                <FlagIcon className='w-5 h-5' />
                <span>مسابقه</span>
            </a>
            <button className='drawer-menu-item'>
                <FolderOpenIcon className='w-5 h-5' />
                <span>پوشه من</span>
            </button>
            <button className='drawer-menu-item'>
                <InformationCircleIcon className='w-5 h-5' />
                <span>درباره ما</span>
            </button>
            <button className='drawer-menu-item'>
                <ChatAlt2Icon className='w-5 h-5' />
                <span>تماس با ما</span>
            </button>
            <button className='drawer-menu-item'>
                <ScaleIcon className='w-5 h-5' />
                <span>قوانین و مقررات</span>
            </button>
        </div>
    )
}