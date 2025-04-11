import React, { useState } from "react";

const useFilterJop = () => {
  const [SelectInput, setSelectInput] = useState("All");
  const handleChange = (el: React.ChangeEvent<HTMLInputElement>) => {
    setSelectInput(el.target.value);
  };

  return { SelectInput, handleChange };
};

export default useFilterJop;
