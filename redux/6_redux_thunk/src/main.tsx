import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import store from './app/store';
import { Provider } from 'react-redux';
import { worker } from './mocks/browser';
import './index.css';

worker.start();

  
const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}