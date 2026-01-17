export const debounce = <Args extends unknown[], Return>(
  callBack: (...args: Args) => Return,
  delay = 500,
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      callBack(...args);
      timeout = null;
    }, delay);
  };
};
