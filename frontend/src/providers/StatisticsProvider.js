import { createContext, useCallback, useEffect, useContext, useMemo, useState } from "react";
import { apiService } from '../api'

const StatisticsContext = createContext({
  statistics: [],
  addStatistics: () => {},
});

export const StatisticsProvider = ({ children }) => {
  const [statistics, setStatistics] = useState([]);
  
  useEffect(() => {
    apiService.fetchStatistics().then(data => setStatistics(data));
    },[])

  const addStatistics = useCallback(
    (data) => {
        return apiService.addStatistics(data).then(apiService.fetchStatistics)
        .then(data => setStatistics(data));
    },
    [],
  );

  const value = useMemo(
    (data) => ({
        statistics: statistics ?? [],
      addStatistics,
    }),
    [statistics, addStatistics],
  );

  return <StatisticsContext.Provider value={value}>{children}</StatisticsContext.Provider>;
};

export const useStatistics = () => useContext(StatisticsContext);