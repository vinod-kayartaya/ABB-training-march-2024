import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './components/App';
import './index.css';

// this is a react version of the DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
