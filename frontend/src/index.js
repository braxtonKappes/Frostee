import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from './utils/auth/auth0-provider';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { frostyApi } from './store/api/frostyApi';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ApiProvider api={frostyApi}>
          <App />
        </ApiProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </StrictMode>
);


