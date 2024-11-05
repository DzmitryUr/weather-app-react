import { createContext, useContext, useEffect, useState } from 'react';

const MetricsContext = createContext();

export const METRIC = 'metric';

const metric = {
  units: METRIC,
  temperature: 'C',
  wind: 'm/s',
};

const imperial = {
  units: 'imperial',
  temperature: 'F',
  wind: 'm/h',
};

export function MetricsProvider({ children }) {
  const [metrics, setMetrics] = useState(metric);

  useEffect(() => {
    const metric = localStorage.getItem('metric');

    if (metric === 'imperial') {
      setMetrics(imperial);
    }
  }, []);

  const toggleMetric = () => {
    setMetrics((currentMetric) => {
      if (currentMetric.units === METRIC) return { ...imperial };
      return { ...metric };
    });
  };

  return (
    <MetricsContext.Provider value={{ metrics, toggleMetric }}>
      {children}
    </MetricsContext.Provider>
  );
}

export const useMetrics = () => useContext(MetricsContext);
