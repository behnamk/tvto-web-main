import React, { createContext, useEffect, useState } from 'react';

export type DrawerState = 'open' | 'close';

// context properties type.
interface ContextProps {
    drawerState: DrawerState,
    setDrawerState: Function
}

// component properties type.
interface ProviderProps {
    children: React.ReactNode
}

export const DrawerProviderContext = createContext<ContextProps>({
    drawerState: 'close',
    setDrawerState: (args: DrawerState) => null
})

export function DrawerProvider(props: ProviderProps): JSX.Element {
    const [drawerState, setDrawerState] = useState<DrawerState>('close');

    useEffect(() => {
        // disable/enable html document scrollbars.
        if (drawerState === 'open') {
            document.documentElement.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
        }
    });

    return (
        <DrawerProviderContext.Provider value={{ drawerState, setDrawerState }}>
            {props.children}
        </DrawerProviderContext.Provider>
    )
}