import { useState } from "react";

const useAddForm = () => {
  const [AddFromState, setAddFormState] = useState(false);
  const [EditFromState, setEditFormState] = useState(false);

  const handleClick = () => {
    setAddFormState(!AddFromState);
  };

  const handleClickEditState = () => {
    setEditFormState(!EditFromState);
  };

  return { AddFromState, handleClick, handleClickEditState, EditFromState };
};

export default useAddForm;
