//Хук принимает колбэк, возвращает булеон загрузку и обработанную ошибку
//Внутри следить при загрузке получает элементы и очищает форму

import { useEffect, useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, error];
}