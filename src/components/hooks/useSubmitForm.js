import { useContext } from "react";
import { Context } from "../../context/context";

/*
  Хук, использующийся для формы.
  Принимает (Сервис класс)
  Возвращает функцию отправки.
*/

export const useSubmitForm = (service) => {
  const { objectForm, setObjectForm, setElement} = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (objectForm.id === undefined || objectForm.id === '') {
      await service.create(objectForm);
    } else {
      await service.updateById(objectForm.id, objectForm);
    }

    setElement(objectForm);
    setObjectForm({});
  }

  return submitHandler;
}