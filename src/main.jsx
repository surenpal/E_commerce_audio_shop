import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
<<<<<<< HEAD
import { DataProvider } from './context/DataContext';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Key:", PUBLISHABLE_KEY);
=======



import { DataProvider } from './context/DataContext';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
>>>>>>> 3661e76f60b676bbec3860b55e1fa2bc8193fb8b

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <DataProvider>
        <App />
      </DataProvider>
    </ClerkProvider>
  </StrictMode>

);