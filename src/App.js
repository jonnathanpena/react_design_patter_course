import React from 'react';

import { UserInfo } from './UserInfo';
import { ResourceLoader } from './ResourceLoader';
import { ProductInfo } from './ProductInfo';
import { DataSource } from './DataSource';

import './App.css';
import axios from 'axios';

const getDataFunc = url => async () => {
  const response = await axios.get(url);

  return response.data;
};

function App() {
  return (
    <>
      <DataSource getDataFunc={getDataFunc('/users/123')} resourceName="user">
        <UserInfo />
      </DataSource>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
