import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
await import('katex/dist/katex.min.css');

import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <App />
);
