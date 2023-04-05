import React from 'react';
import './App.css';
import UsersForm from './components/UsersForm';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="App">
      <UserTable />
      <UsersForm />
    </div>
  );
}

export default App;
