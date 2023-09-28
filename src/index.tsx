import { createRoot } from 'react-dom/client';
import App from './App';

const R18_9 = () => {
    return(
        <div>
        <App />
        </div>
    )
} 

const root = createRoot(document.getElementById('root')!);
root.render(<R18_9 />)