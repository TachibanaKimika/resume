export const getContent = (key: string): string => localStorage.getItem(`md:${key}`) || '';

export const setContent = (key: string, value: string): void => {
  localStorage.setItem(`md:${key}`, value);
};

export const deleteContent = (key: string): void => {
  localStorage.removeItem(`md:${key}`);
};

export const getStyle = (key: string): string => localStorage.getItem(`style:${key}`) || '';

export const setStyle = (key: string, value: string): void => {
  localStorage.setItem(`style:${key}`, value);
};

export const deleteStyle = (key: string): void => {
  localStorage.removeItem(`style:${key}`);
};

export const getAllContentKeys = (): string[] => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i) || '';
    if (key.startsWith('md:')) {
      keys.push(key.substring(3));
    }
  }
  return keys;
};

export const getAllStyleKeys = (): string[] => {
  const keys = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i) || '';
    if (key.startsWith('style:')) {
      keys.push(key.substring(6));
    }
  }
  return keys;
};
