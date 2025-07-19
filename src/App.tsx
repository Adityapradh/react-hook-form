import React from 'react';

import './App.css';
import AccessibleForm from './Accessibleform'; // ✅ if file is Accessibleform.tsx


function App() {
  return (
    <div className="App">
      <h2>React Hook Form - Accessible Example</h2>
      <AccessibleForm />  {/* ✅ ये component render किया */}
    </div>
  );
}





export default App;
