export const localStorageAdapter = {
  getItem(key: string): any {
    const retrievedStorage = localStorage.getItem(key) || '';
    return JSON.parse(retrievedStorage);
  },

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
};
