import FloatButton from "./FloatButton";
import PopUp from "./PopUp";
import { item } from "../App";

interface propsModal {
  isSelect: boolean;
  homeData: item[];
  setInitialItems: React.Dispatch<React.SetStateAction<item[]>>;
  isToggle: () => void;
  isPopUp: boolean;
  setIsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItemIndex: number | null;
  setSelectedItemIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Modal: React.FC<propsModal> = ({
  isSelect,
  homeData,
  setInitialItems,
  isToggle,
  isPopUp,
  setIsPopUp,
  selectedItemIndex,
  setSelectedItemIndex,
}) => {
  return (
    <>
      <FloatButton isToggle={isToggle} isSelect={isSelect} />
      {isPopUp && (
        <PopUp
          isSelect={isSelect}
          modelData={homeData}
          setInitialItems={setInitialItems}
          setIsPopUp={setIsPopUp}
          selectedItemIndex={selectedItemIndex}
          setSelectedItemIndex={setSelectedItemIndex}
        />
      )}
    </>
  );
};
export default Modal;
