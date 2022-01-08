import React, { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { DrawerProviderContext } from '../context/DrawerProvider';
import { LogoutIcon, XIcon } from '@heroicons/react/outline';
import DrawerMenu from './drawer-menu';
import { useDispatch } from 'react-redux';
import { setAuthorizationState } from '../redux/authorization/action';


export default function SideDrawer() {

    const { drawerState, setDrawerState } = useContext(DrawerProviderContext);
    const dispatch = useDispatch();

    const onClose = () => {
        setDrawerState('close');
    }

    const logoutClick = () => {
        setDrawerState('close');
        dispatch(setAuthorizationState({
            token: '',
            refresh: '',
            expireAt: new Date()
        }));
    }

    return (
        <Transition
            show={drawerState === 'open'}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">
            <Dialog
                as="div"
                className="fixed inset-0 z-40 overflow-y-auto"
                onClose={onClose}>
                <Dialog.Overlay className="fixed inset-0 backdrop-blur" />
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
                        className="inline-block h-screen align-bottom"
                        aria-hidden="true" />

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <aside className={`drawer ${drawerState} p-2`} >
                            <div className='flex flex-row space-x-2 items-center justify-between'>
                                <button className='logout-button'
                                    onClick={logoutClick}>
                                    <small>خروج</small>
                                    <LogoutIcon className='w-4 h-4' />
                                </button>
                                <h5 className='rtl text-right flex-grow flex items-center'>
                                    <span className='font-bold text-sm text-blue-500'>مسعود مردان نیا</span>
                                </h5>
                                <button className='text-blue-400 hover:text-blue-600 transition-all outline-none' onClick={onClose}>
                                    <XIcon className='w-7 h-7' />
                                </button>
                            </div>
                            {/* <section className='bg-blue-50 p-2 mt-4 rounded-xl flex space-x-1 flex-row-reverse space-x-reverse items-center'>
                                <CreditCardIcon className='w-8 h-8 text-blue-200' />
                                <small className='font-medium text-blue-500'>اعتبار فعلی شما</small>
                                <h6 className='font-bold text-blue-600 flex-grow text-left'>150.000</h6>
                                <small className='font-bold text-xs text-blue-600'>ریال</small>
                            </section> */}
                            <section className='py-4'>
                                <DrawerMenu />
                            </section>
                        </aside>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}