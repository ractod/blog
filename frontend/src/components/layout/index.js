import React from 'react';
import Footer from './Footer';

// components
import Header from './Header';

const LayOut = ({ children }) => {
    return (
        <>
            <Header />
                { children }
            <Footer />
        </>
    );
};

export default LayOut;