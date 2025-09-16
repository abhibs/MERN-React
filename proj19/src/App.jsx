import React from 'react';

const App = () => {
    const btnClick= ()=>{
        alert("Clicked")
    }
    return (
        <div>
            <button onClick={btnClick}>Click Me</button>
        </div>
    );
};

export default App;