import { MenuIcon } from '@heroicons/react/outline';
import moment from 'moment';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DrawerProviderContext } from '../context/DrawerProvider';
import { selectAuthorizationState } from '../redux';

export default function Navbar() {
    const authorization = useSelector(selectAuthorizationState);
    const history = useHistory();
    const { drawerState, setDrawerState } = useContext(DrawerProviderContext);

    const drawerButtonClick = () => {
        setDrawerState(drawerState === 'open' ? 'close' : 'open')
    }

    const redirectHome = () => {
        history.replace('/');
    }

    return (
        <nav className={`navbar`}>
            <div className='flex flex-row-reverse items-center cursor-pointer' onClick={redirectHome}>
                <div className='logo'></div>
                <h6 className='font-bold text-blue-500 text-center rtl'>سازمان آموزش فنی و حرفه‌ای</h6>
            </div>
            {
                (moment(authorization.expireAt).isAfter(moment.now())) && authorization.token !== '' ?
                    <button className='drawer-button' onClick={drawerButtonClick}>
                        <MenuIcon className='w-8 h-8 p-1' />
                    </button>
                    : null
            }
        </nav>
    )
}