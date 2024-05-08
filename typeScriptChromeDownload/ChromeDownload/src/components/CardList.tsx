import { item } from "../App";
import closeButton from "../assets/close-button.png";
interface itemType {
  homeData: item[];
  isSelect: boolean;
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialItems: React.Dispatch<React.SetStateAction<item[]>>;
  filteredItems: item[];
  selectedItemIndex: number | null;
  setSelectedItemIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const CardList: React.FC<itemType> = ({
  homeData,
  isSelect,
  setIsSelect,
  setInitialItems,
  filteredItems,
  selectedItemIndex,
  setSelectedItemIndex,
}) => {
  const handleClick = (index: number) => {
    setSelectedItemIndex(index);
    setIsSelect((prev) => !prev);
  };

  const removeItem = (indexx: number) => {
    setInitialItems(homeData.filter((initialItems, index) => indexx !== index));
  };

  return (
    <>
      <ul className="ul-card-container">
        <div className="date">Today</div>
        {filteredItems.map((homeData, index) => (
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
              <img className="icon" src={homeData.image} alt="" />
            </div>
            <div className="right-container">
              <div className="file-name">{homeData.fileName}</div>
              <div className="link-name">{homeData.creator}</div>
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
