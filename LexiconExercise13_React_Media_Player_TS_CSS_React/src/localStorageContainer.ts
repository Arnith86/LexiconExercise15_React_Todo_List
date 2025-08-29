/**
 * Saves and load array of data to and from the browser's localStorage under a specified key.
 *
 * @template T - The type of items in the array.
 * @param key - The localStorage key under which the data will be stored/retrieved.
 * @param data - An array of items to store/retrieve to/from localStorage.
 */

export function saveToLocalStorage<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage<T>(key: string): T[] {
  const stored = localStorage.getItem(key);
  return stored ? (JSON.parse(stored) as T[]) : [];
}

export function saveSortTypeToLocalStorage(
  sortType: string,
  key: string
): void {
  localStorage.setItem(key, sortType);
}

export function loadSortTypeFromLocalStorage(key: string): string {
  const storedType = localStorage.getItem(key);
  return storedType ? storedType : key;
}
