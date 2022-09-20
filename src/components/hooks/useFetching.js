//Хук принимает колбэк, возвращает булеон загрузку и обработанную ошибку
//Внутри следить при загрузке получает элементы и очищает форму

import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { objectForm, element } = useContext(Context);

  useEffect(() => {
    fetch();
  }, [element]);

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