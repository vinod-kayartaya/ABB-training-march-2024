import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Counter from './state-demo/Counter';
import CounterFc from './state-demo/CounterFc';
import CustomerForm from './state-demo/CustomerForm';

// this is a react version of the DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<CustomerForm />);
