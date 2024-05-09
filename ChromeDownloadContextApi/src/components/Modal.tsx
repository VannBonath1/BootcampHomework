import FloatButton from "./FloatButton";
import PopUp from "./PopUp";
import { MyContext } from "../App";
import { HomeContext } from "../Home";
import { useContext } from "react";

const Modal: React.FC = () => {
  const myData1 = useContext(HomeContext);
  if (!myData1) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  const myData = useContext(MyContext);
  if (!myData) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  const setSelectedItemIndex = myData1.setSelectedItemIndex;
  const setInitialItems = myData.setInitialItems;
  const initialItems = myData.initialItems;
  const isToggle = myData1.isToggle;
  const isPopUp = myData1.isPopUp;
  const setIsPopUp = myData1.setIsPopUp;
  const selectedItemIndex = myData1.selectedItemIndex;
  const isSelect = myData1.isSelect;
  return (
    <>
      <FloatButton />
      {isPopUp && <PopUp />}
    </>
  );
};
export default Modal;
