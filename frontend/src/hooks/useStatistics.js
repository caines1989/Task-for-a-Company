import { useContext } from "react";
import { StatisticsContext } from "../contexts/statisticsContext";

export const useStatistics = () => useContext(StatisticsContext);
