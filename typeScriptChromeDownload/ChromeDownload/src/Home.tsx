import SearchButton from "./components/SearchButton";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import { item } from "./App";
import { useState } from "react";

interface itemType {
  appData: item[];
  setInitialItems: React.Dispatch<React.SetStateAction<item[]>>;
}
const Home: React.FC<itemType> = ({ appData, setInitialItems }) => {
  // pass prop from to CardList and FormCreate
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const [isPopUp, setIsPopUp] = useState<boolean>(false);
  const isToggle = (): void => {
    setIsPopUp((prev) => !prev);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredItems = appData.filter(
    (InitialItems) =>
      InitialItems.fileName.toLowerCase().includes(searchTerm) ||
      InitialItems.creator.toLowerCase().includes(searchTerm)
  );

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setSelectedItemIndex(index);
    setIsSelect((prev) => !prev);
  };

  return (
    <>
      <SearchButton
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <CardList
        homeData={appData}
        setInitialItems={setInitialItems}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        filteredItems={filteredItems}
        selectedItemIndex={selectedItemIndex}
        setSelectedItemIndex={setSelectedItemIndex}
      />
      <Modal
        isSelect={isSelect}
        homeData={appData}
        setInitialItems={setInitialItems}
        isToggle={isToggle}
        isPopUp={isPopUp}
        setIsPopUp={setIsPopUp}
        selectedItemIndex={selectedItemIndex}
        setSelectedItemIndex={setSelectedItemIndex}
      />
    </>
  );
};
export default Home;
