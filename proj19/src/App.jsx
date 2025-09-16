import React from 'react';

const App = () => {
    function btnClick(){
        alert("Clicked")
    }
    return (
        <div>
            <button onClick={btnClick}>Click Me</button>
        </div>
    );
};

export default App;