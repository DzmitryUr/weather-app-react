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
    const storedMetric = localStorage.getItem(METRIC);
    console.log('storedMetric=', storedMetric);

    if (storedMetric === 'imperial') {
      setMetrics(imperial);
    }
  }, []);

  const toggleMetric = () => {
    setMetrics((currentMetric) => {
      let newMetric = {};
      const currentUnits = currentMetric.units;
      if (currentUnits === METRIC) {
        newMetric = { ...imperial };
      } else {
        newMetric = { ...metric };
      }

      localStorage.setItem(METRIC, newMetric.units);
      return newMetric;
    });
  };

  return (
    <MetricsContext.Provider value={{ metrics, toggleMetric }}>
      {children}
    </MetricsContext.Provider>
  );
}

export const useMetrics = () => useContext(MetricsContext);
