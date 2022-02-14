import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/*" element={<DashboardRoutes/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
