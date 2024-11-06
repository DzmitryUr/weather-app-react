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
      // Defer the analytics script to when the browser is idle, if possible
      const runAnalytics = () => {
        import('react-ga4')
          .then((ReactGA4) => {
            const { initialize, send } = ReactGA4.default;
            initialize(analyticsID); // Put your actual analytics ID here
            send({
              hitType: 'pageview',
              page: window.location.pathname,
            });
          })
          .catch((error) => console.error('Failed to load react-ga4', error));
      };

      if ('requestIdleCallback' in window) {
        // Use requestIdleCallback to defer running the analytics script
        window.requestIdleCallback(runAnalytics);
      } else {
        // Fallback to setTimeout if requestIdleCallback is not supported
        setTimeout(runAnalytics, 5000);
      }
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
