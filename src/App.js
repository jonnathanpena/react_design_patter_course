import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';

import './App.css';
import React from 'react';

function App() {
  return (
    <UserLoader userId="123">
      <UserInfo />
    </UserLoader>
  );
}

export default App;
