import React, { useEffect, useState } from "react";

const useCheckBox = (valueArray) => {
  const [checkBoxItems, setCheckBoxItems] = useState(() => {
    const obj = {};
    valueArray.forEach((element, index) => {
      obj[index] = false;
    });
    return obj;
  });
  
  console.log({ checkBoxItems });
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const array = [];
    for (const key in checkBoxItems) {
      if (checkBoxItems[key]) {
        array.push(valueArray[parseInt(key)]);
      }
    }
    setCheckedItems(array);
  }, [checkBoxItems]);

  const handleChange = (index) => {
    setCheckBoxItems((prev) => ({ ...prev, index: !prev[index] }));
  };

  return {checkedItems, handleChange};
};

export default useCheckBox;
