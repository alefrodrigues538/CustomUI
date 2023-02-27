import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './homepage';

const RootPages: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RootPages;