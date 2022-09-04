export const statisticsService = {
  getAll: async () => {
    const response = await fetch("/api/statistics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  },
  insertOne: async (statistic) => {
    const response = await fetch("/api/statistics", {
      method: "POST",
      body: JSON.stringify(statistic),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  },
};
