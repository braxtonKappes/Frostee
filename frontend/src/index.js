import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from './utils/auth/auth0-provider';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);


