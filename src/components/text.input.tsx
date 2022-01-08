import React, { useState } from 'react';

interface Props {
    title: string;
    id: string;
    placeholder?: string;
}


export default function TextInput(props: Props) {
    const [focused, setFocused] = useState<boolean>(false);

    return (
        <div className='p-1 flex flex-col space-y-1 items-end'>
            <label
                htmlFor={props.id}
                className={`${focused ? 'text-blue-500' : 'text-gray-500'} font-normal`}>
                {props.title}
            </label>
            <input type='text'
                className='text-input'
                id={props.id}
                placeholder={props.placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)} />
        </div>
    )
}