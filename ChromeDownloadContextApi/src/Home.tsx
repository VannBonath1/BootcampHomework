import SearchButton from "./components/SearchButton";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import { useState } from "react";
import { MyContext } from "./App";
import { useContext } from "react";
import { createContext } from "react";
import React from "react";
import { item } from "./App";

interface contextType {
  isSelect: boolean;
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
  isPopUp: boolean;
  setIsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  isToggle: () => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedItemIndex: number | null;
  setSelectedItemIndex: React.Dispatch<React.SetStateAction<number | null>>;
  handleClick: (index: number) => void;
  filteredItems: item[];
}

export const HomeContext = createContext<contextType | undefined>(undefined);

const Home: React.FC = () => {
  const myData = useContext(MyContext);
  if (!myData) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  const initialItems = myData.initialItems;
  const setInitialItems = myData.setInitialItems;

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

  const filteredItems = initialItems.filter(
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
      <HomeContext.Provider
        value={{
          isSelect: isSelect,
          setIsSelect: setIsSelect,
          isPopUp: isPopUp,
          setIsPopUp: setIsPopUp,
          isToggle,
          searchTerm: searchTerm,
          setSearchTerm: setSearchTerm,
          handleSearchChange: handleSearchChange,
          selectedItemIndex: selectedItemIndex,
          setSelectedItemIndex: setSelectedItemIndex,
          handleClick: handleClick,
          filteredItems: filteredItems,
        }}
      >
        <SearchButton />
        <CardList />
        <Modal />
      </HomeContext.Provider>
    </>
  );
};
export default Home;
