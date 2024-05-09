import plusIcon from "../assets/plus.png";
import edit from "../assets/edit.png";

import { HomeContext } from "../Home";
import { useContext } from "react";

const FloatButton: React.FC = () => {
  const myData1 = useContext(HomeContext);
  if (!myData1) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  const isToggle = myData1.isToggle;
  const isSelect = myData1.isSelect;
  return (
    <>
      {isSelect === false && (
        <div onClick={isToggle}>
          <a href="#">
            <img className="plus-icon" src={plusIcon} alt="" />
          </a>
        </div>
      )}

      {isSelect === true && (
        <div onClick={isToggle}>
          <a href="#">
            <img className="plus-icon" src={edit} alt="" />
          </a>
        </div>
      )}
    </>
  );
};
export default FloatButton;
