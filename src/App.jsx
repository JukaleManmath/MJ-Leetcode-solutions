import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SolutionList from './components/SolutionList';
import SolutionDetail from './components/SolutionDetail';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="solution-container">
                <Routes>
                    <Route path="/" element={<SolutionList />} />
                    <Route path="/solutions/:fileName" element={<SolutionDetail />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
