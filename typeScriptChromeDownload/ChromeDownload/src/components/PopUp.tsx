import FormCreate from "./FormCreate";
import FormUpdate from "./FormUpdate";
import { item } from "../App";

interface propsPopUp {
  isSelect: boolean;
  modelData: item[];
  setInitialItems: React.Dispatch<React.SetStateAction<item[]>>;
  setIsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItemIndex: number | null;
  setSelectedItemIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const PopUp: React.FC<propsPopUp> = ({
  isSelect,
  modelData,
  setInitialItems,
  setIsPopUp,
  selectedItemIndex,
  setSelectedItemIndex,
}) => {
  return (
    <>
      {isSelect === false && (
        <FormCreate
          popUpData={modelData}
          setInitialItems={setInitialItems}
          setIsPopUp={setIsPopUp}
        />
      )}
      {isSelect === true && (
        <FormUpdate
          popUpData={modelData}
          setInitialItems={setInitialItems}
          setIsPopUp={setIsPopUp}
          selectedItemIndex={selectedItemIndex}
          setSelectedItemIndex={setSelectedItemIndex}
        />
      )}
    </>
  );
};
export default PopUp;
