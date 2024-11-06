import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Weather from './components/Weather';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { MetricsProvider } from './hooks/useMetrics';

const queryClient = new QueryClient();
const analyticsID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

function App() {
  useEffect(() => {
    if (analyticsID) {
      import('react-ga4').then((ReactGA4) => {
        const { initialize, send } = ReactGA4.default; // Access default export

        initialize(analyticsID);

        send({
          hitType: 'pageview',
          page: window.location.pathname,
        });
      });
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <MetricsProvider>
        <Header />
        <Weather />
      </MetricsProvider>
    </QueryClientProvider>
  );
}

export default App;
