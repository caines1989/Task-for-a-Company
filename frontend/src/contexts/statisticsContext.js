import { createContext, useCallback, useEffect, useState } from "react";
import { statisticsService } from "../services/statistics";

export const StatisticsContext = createContext({
  statistics: [],
  addStatistic: () => {},
});

export const StatisticsProvider = ({ children }) => {
  const [statistics, setStatistics] = useState([]);
  const addStatistic = useCallback((statistic) => {
    async function addStatisticAndRefetch() {
      await statisticsService.insertOne(statistic);
      const statistics = await statisticsService.getAll();
      setStatistics(statistics);
    }

    addStatisticAndRefetch();
  }, []);

  useEffect(() => {
    async function fetchStatistics() {
      const statistics = await statisticsService.getAll();
      setStatistics(statistics);
      console.log(statistics);
    }

    fetchStatistics();
  }, []);

  return (
    <StatisticsContext.Provider
      value={{
        statistics,
        addStatistic,
      }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};
