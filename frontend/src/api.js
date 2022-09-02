export const apiService = {
    fetchStatistics: async () => {
        const response = await fetch('/api/statistics' , {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }})
      const json = await response.json();
 
      return json;
    },
    addStatistics: async (data) => {
      console.log(data);
        const response = await fetch('/api/statistics' , {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }})
      const json = await response.json();
 
      return json;
    },
};



