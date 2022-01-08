import React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
    children: React.ReactNode
}

export default function Page(props: Props) {
    const location = useLocation();

    return (
        <>
            <main className='flex flex-row items-center justify-center'>
                <div className={`${location.pathname === '/' ? 'w-full flex flex-col items-center' : 'w-full xl:max-w-6xl flex flex-col items-center'}`}>
                    {props.children}
                </div>
            </main>
            <footer className='container mx-auto flex flex-row flex-wrap space-x-2 items-center justify-evenly py-4'>
                page footer
            </footer>
        </>
    )
}