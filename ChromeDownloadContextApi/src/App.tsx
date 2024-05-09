import { useState } from "react";
import Home from "./Home";
import { createContext, useContext } from "react";

export interface item {
  fileName: string;
  creator: string;
  image: string | undefined;
}

interface ContextType {
  initialItems: item[];
  setInitialItems: React.Dispatch<React.SetStateAction<item[]>>;
}

export const MyContext = createContext<ContextType | undefined>(undefined);

const App: React.FC = () => {
  const [initialItems, setInitialItems] = useState<item[]>([
    {
      fileName: "File Name",
      creator: "Creator",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
    {
      fileName: "File Name2",
      creator: "Creator2",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    },
  ]);
  return (
    <>
      <MyContext.Provider
        value={{ initialItems: initialItems, setInitialItems: setInitialItems }}
      >
        <Home />
      </MyContext.Provider>
    </>
  );
};

export default App;
