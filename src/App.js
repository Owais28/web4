import React from 'react';
import FeaturesSection from './components/FeaturesSection';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import MoreFeatures from './components/MoreFeatures';

const App = () => {
    return (
        <>
            <Header/>
            <FeaturesSection/>
            <MoreFeatures/>
            <GetStarted/>
        </>
    );
}

export default App;



