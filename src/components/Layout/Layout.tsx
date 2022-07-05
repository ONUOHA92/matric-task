import React from 'react';
import Header from '../Header/Header';


interface Props {
    children?: any
}

function Layout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default Layout;