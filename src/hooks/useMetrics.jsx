import React, { createContext, useContext, useState } from 'react';

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

export const MetricsProvider = ({ children }) => {
  const [metrics, setMetrics] = useState(metric);

  const toggleMetric = () => {
    setMetrics((currentMetrics) => {
      if (currentMetrics.units === METRIC) return { ...imperial };
      return { ...metric };
    });
  };

  return (
    <MetricsContext.Provider value={{ metrics, toggleMetric }}>
      {children}
    </MetricsContext.Provider>
  );
};

export const useMetrics = () => useContext(MetricsContext);
