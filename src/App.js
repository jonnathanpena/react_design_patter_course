import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';

import './App.css';
import React from 'react';

function App() {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
}

export default App;
