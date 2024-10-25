import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactGA from 'react-ga4';
import './App.css';
import Weather from './components/Weather';
import { useEffect } from 'react';
import { Toast } from './components/Toast';

const queryClient = new QueryClient();
const analyticsID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

function App() {
  useEffect(() => {
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
      {/* <Weather /> */}
      <Toast
        message='This is a dismissable success message!'
        type='success'
        duration={2000}
      />
      <Toast
        message='This is a dismissable info message!'
        type='info'
        duration={3000}
      />
      <Toast
        message='This is a dismissable warning message!'
        type='warning'
        duration={4000}
      />
      <Toast
        message='This is a dismissable error message!'
        type='error'
        duration={5000}
      />

      <Toast message='This is an error message!' type='error' />
      <Toast message='This is a success message!' type='success' />
      <Toast message='This is an info message!' type='info' />
      <Toast message='This is a warning message!' type='warning' />
    </QueryClientProvider>
  );
}

export default App;
