import React, { useState } from "react";
import mp3Icon from "./assets/mp3.jpg";
import img from "./assets/img.jpg";
import pdf from "./assets/pdf.png";
import chrome from "./assets/chrome.png";
import utorrent from "./assets/utorrent.png";
import searchIcon from "./assets/search.png";
import dotIcon from "./assets/dots.png";

interface Item {
  id: number;
  name: string;
  link: string;
  img: string;
}

const initialItems: Item[] = [
  {
    id: 1,
    name: "ស្រលាញ់គេម្នាក់ឯង - ហេង_ ពិទូ [ CLASSIC ] (mp3cut.net).mp3",
    link: "blob:https://mp3cut.net/81ce676d-58ae-4833-bd99-379e3fd6657a",
    img: mp3Icon,
  },
  {
    id: 2,
    name: "utorrent_installer.exe",
    link: "blob:https://www.utorrent.com/b44d4d79-6c7c-43d3-86d4-3713919b8669",
    img: utorrent,
  },
  {
    id: 3,
    name: "rise_of_the_ronin_2024_video_game-wallpaper-1920x1080.jpg",
    link: "https://wallpaperswide.com",
    img: img,
  },
  {
    id: 4,
    name: "images.png",
    link: "https://encrypted-tbn0.gstatic.com",
    img: img,
  },
  {
    id: 5,
    name: "medium-levi-ackerman-aot-armin-attack-on-titans-captain-levi-original-imagayfqrwkvy6ja.webp",
    link: "https://rukminim2.flixcart.com",
    img: chrome,
  },
  {
    id: 6,
    name: "Levi_Ackerman.webp",
    link: "https://static.wikia.nocookie.net",
    img: chrome,
  },
  {
    id: 7,
    name: "unnamed.jpg",
    link: "https://lh3.googleusercontent.com",
    img: img,
  },
  {
    id: 8,
    name: "crop-woman-measuring-pulse-patient.jpg",
    link: "https://downloadscdn6.freepik.com",
    img: img,
  },
  {
    id: 9,
    name: "schematiq.pdf",
    link: "https://export-download.canva.com",
    img: pdf,
  },
  {
    id: 10,
    name: "images.png",
    link: "https://encrypted-tbn2.gstatic.com",
    img: img,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredItems = initialItems.filter((initialItems) =>
    initialItems.name.toLowerCase().includes(searchTerm)
  );

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
          <img className="dot-icon" src={dotIcon} alt="" />
        </div>
      </div>

      <ul className="ul-card-container">
        <div className="date">Today</div>
        {filteredItems.map((item) => (
          <li className="li-card-container" key={item.id}>
            <div className="left-container">
              <img className="mp3-icon" src={item.img} alt="Big oof" />
            </div>
            <div className="right-container">
              <div className="file-name">{item.name}</div>
              <div className="link-name">{item.link}</div>
              <div className="show-in-folder">Show in folder</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
