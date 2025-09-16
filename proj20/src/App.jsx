import React from 'react';

const App = () => {
  const postFormData = (event) =>{
    event.preventDefault()
    alert("Form Submited")
  }
  return (
    <div>
      <form onSubmit={postFormData}>
        <input placeholder='Enter Name' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;