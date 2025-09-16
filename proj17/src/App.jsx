import React from 'react';
import Abhi from './components/Abhi';

const App = () => {

    const personObj = {
        name: "Abhiram B S",
        age: 28,
        location: "Javalli Tudoor Thirthahalli Shimoga Karnataka 577226"
    }

    return (
        <div>
            <Abhi person = {personObj}/>
        </div>
    );
};

export default App;