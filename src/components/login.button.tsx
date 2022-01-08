import React from 'react';

interface Props {
    loading?: boolean;
    title: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function LoginButton(props: Props) {
    return (
        <button
            className={
                `${props.loading ? 'loading pointer-events-none' : 'w-full'} 
                ${props.disabled && 'pointer-events-none'}
                ${props.className ? props.className : ''}
                disabled:opacity-50 shadow bg-blue-500 p-2 capitalize flex flex-row items-center justify-center spinner-button text-white`
            }
            disabled={props.disabled}
            onClick={props.onClick}>
            {
                props.loading ?
                    <div className={
                        `${props.loading ? 'loading' : ''} 
                    loader ease-linear rounded-full border-t-4 border-4 h-6 w-6 light transition-opacity`
                    } /> : props.title
            }
        </button>
    )
}