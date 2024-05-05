import React, { useState } from "react";
import chrome from "./assets/chrome.png";
import searchIcon from "./assets/search.png";
import dotIcon from "./assets/dots.png";
import plusIcon from "./assets/plus.png";
import closebutton from "./assets/close-button.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface Item {
  fileName: string;
  creator: string;
  image: string;
}

// zod
const schema = z.object({
  fileName: z.string().min(1, { message: "File name is required" }),
  creator: z
    .string()
    .min(3, { message: "Creator must be at least 3 characters" }),
  image: z.any(),
});
type FormInputs = z.infer<typeof schema>;
//end zod

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [initialItems, setInitialItems] = useState<Item[]>([
    {
      fileName: "GamePlay.exe",
      creator: "Bonath",
      image: "",
    },
  ]);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  // zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    setInitialItems([
      ...initialItems,
      {
        fileName: data.fileName,
        creator: data.creator,
        image: data.image,
      },
    ]);
    setShowPopup(false);
  };
  // end zod
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredItems = initialItems.filter((initialItems) =>
    initialItems.fileName.toLowerCase().includes(searchTerm)
  );

  const removeItem = (index: number) => {
    setInitialItems(
      initialItems.filter((initialItems, index) => index !== index)
    );
  };

  return (
    <>
      {/* Search-------------------- */}
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
          <img className="dot-icon" src={dotIcon} alt="" />
        </div>
      </div>
      {/* Card-------------------- */}
      <ul className="ul-card-container">
        <div className="date">Today</div>
        {filteredItems.map((item, index) => (
          <li className="li-card-container" key={index}>
            <div key={index} onClick={() => removeItem(index)}>
              <img className="x-icon" src={closebutton} alt="" />
            </div>
            <div className="left-container">
              <img className="mp3-icon" src={item.image} alt="" />
            </div>
            <div className="right-container">
              <div className="file-name">{item.fileName}</div>
              <div className="link-name">{item.creator}</div>
              <div className="show-in-folder">Show in folder</div>
            </div>
          </li>
        ))}
      </ul>
      {/* Float button-------------------- */}
      <div>
        <a href="#" onClick={togglePopup}>
          <img className="plus-icon" src={plusIcon} alt="" />
        </a>
      </div>
      {/* Popup */}
      {showPopup && (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="popup">
            <label className="file-name-label">File Name</label>
            <br />
            <input
              className="file-name-input"
              type="text"
              {...register("fileName", { required: true })}
            />
            {errors.fileName && <span>{errors.fileName.message}</span>}
            <br />
            <label className="creator-label">Creator</label>
            <br />
            <input
              className="creator-input"
              type="text"
              {...register("creator", { required: true })}
            />
            {errors.creator && <span>{errors.creator.message}</span>}
            <br />
            <input
              className="upload-image"
              type="file"
              {...(register("image"), { required: true })}
            />

            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
            <button className="create-button" type="submit">
              Create
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default App;
