export function saveToLocalStorage<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromLocalStorage<T>(key: string): T[] {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : [];
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
