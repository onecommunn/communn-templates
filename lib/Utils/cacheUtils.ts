// cacheUtils.ts

export const getCache = (key: string) => {
    const cachedData = localStorage.getItem(key);
    if (!cachedData) return null;
  
    const { data, timestamp } = JSON.parse(cachedData);
    const isExpired = Date.now() - timestamp > 60 * 60 * 1000; // 1 hour in milliseconds
  
    if (isExpired) {
      localStorage.removeItem(key); // Clear expired data
      return null;
    }
  
    return data;
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const setCache = (key: string, data: any) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  };
  