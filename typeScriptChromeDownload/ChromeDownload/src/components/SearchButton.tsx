import chrome from "../assets/chrome.png";
import searchIcon from "../assets/search.png";
import dot from "../assets/dots.png";

interface propsSearch {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
}

const SearchButton: React.FC<propsSearch> = ({
  handleSearchChange,
  searchTerm,
}) => {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <img className="chrome-logo" src={chrome} alt="" />
          <p>downloads</p>
        </div>
        <div className="header-center">
          <img className="search-icon" src={searchIcon} alt="" />
          <input
            className="search-button"
            type="text"
            placeholder="Search Items"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="header-right">
          <img className="dot-icon" src={dot} alt="" />
        </div>
      </div>
    </>
  );
};
export default SearchButton;
