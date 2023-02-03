import React from 'react';
import ReactDOM from 'react-dom/client';

import RoutesApp from './Routes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);

reportWebVitals();
