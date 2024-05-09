import closeButton from "../assets/close-button.png";
import { HomeContext } from "../Home";
import { useContext } from "react";
import { MyContext } from "../App";

const CardList: React.FC = () => {
  const myData1 = useContext(HomeContext);
  if (!myData1) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  const myData = useContext(MyContext);
  if (!myData) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  const setSelectedItemIndex = myData1.setSelectedItemIndex;
  const setIsSelect = myData1.setIsSelect;
  const setInitialItems = myData.setInitialItems;
  const initialItems = myData.initialItems;
  const filteredItems = myData1.filteredItems;
  const selectedItemIndex = myData1.selectedItemIndex;
  const isSelect = myData1.isSelect;

  const handleClick = (index: number) => {
    setSelectedItemIndex(index);
    setIsSelect((prev) => !prev);
  };

  const removeItem = (indexx: number) => {
    setInitialItems(
      initialItems.filter((initialItems, index) => indexx !== index)
    );
  };

  return (
    <>
      <ul className="ul-card-container">
        <div className="date">Today</div>
        {filteredItems.map((initialItems, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`li-card-container ${
              selectedItemIndex === index && isSelect === true ? "selected" : ""
            }`}
          >
            <div>
              <img
                className="x-icon"
                onClick={() => removeItem(index)}
                src={closeButton}
                alt=""
              />
            </div>
            <div className="left-container">
              <img className="icon" src={initialItems.image} alt="" />
            </div>
            <div className="right-container">
              <div className="file-name">{initialItems.fileName}</div>
              <div className="link-name">{initialItems.creator}</div>
              <div className="show-in-folder">Show in folder</div>
            </div>
          </li>
        ))}
      </ul>
      ;
    </>
  );
};
export default CardList;
