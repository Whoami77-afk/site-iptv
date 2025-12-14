import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

const rootEl = document.getElementById('root');

function renderApp() {
  try {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    // signal successful start
    // eslint-disable-next-line no-console
    console.log('App rendered successfully');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Render error:', err);
    if (rootEl) rootEl.innerHTML = `<pre style="color: red; padding: 1rem;">Render error:\n${String(err)}</pre>`;
    throw err;
  }
}

renderApp();

// expose a helper for dev to re-render after fixes
if (import.meta && import.meta.hot) {
  import.meta.hot.accept('./App', () => {
    renderApp();
  });
}