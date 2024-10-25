import React from 'react';

import { UserInfo } from './UserInfo';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo';

import './App.css';

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
