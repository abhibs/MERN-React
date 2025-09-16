import React from 'react';
import Abhi from './components/Abhi';

const App = () => {

    const btnClick = () =>{
        alert("Abhiram B S Javalli Tudoor Thirthahalli Shimoga Karnataka 577226")
    }

    return (
        <div>
            <Abhi btn = {btnClick} />
        </div>
    );
};

export default App;