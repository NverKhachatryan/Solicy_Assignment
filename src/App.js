import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountsPage from './pages/accounts-page';
import './App.css';
import AccountId from './pages/account-id';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<AccountsPage />} />
          <Route path="/accounts/:id" element={<AccountId />} />        
        </Routes>
      </Router>
    </>
  );
}

export default App;
