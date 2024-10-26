import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactGA from 'react-ga4';
import './App.css';
import Weather from './components/Weather';
import { useEffect } from 'react';

const queryClient = new QueryClient();
const analyticsID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

function App() {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    if (analyticsID) {
      ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);

      ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname,
      });
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
}

export default App;
