"use client";
import React, { useState } from "react";
import heart from "../../../public/heart.png";
import hearted from "../../../public/hearted.png";
import Image, { StaticImageData } from "next/image";
import { DataType } from "../page";
interface AddToFavoriteType {
  allData: DataType[];
  dataId: number;
}
let favorited: DataType[] = [];
const uniqueIds = new Set<number>();

const AddToFavorite: React.FC<AddToFavoriteType> = ({ allData, dataId }) => {
  const [changeIcon, setChangeIcon] = useState<StaticImageData>(heart);

  return (
    <>
      <Image
        src={changeIcon}
        alt={""}
        onClick={() => {
          setChangeIcon(changeIcon === heart ? hearted : heart);
          allData[dataId - 1].isFavorite = !allData[dataId - 1].isFavorite;
          const filteredData: DataType[] = allData.filter(
            (allData) => allData.isFavorite === true
          );

          console.log("original data", allData);
          console.log("filterd Data", filteredData);

          favorited = [...favorited, ...filteredData];
          const filteredFavorite: DataType[] = favorited.filter(
            (favorited) => favorited.isFavorite === true
          );
          console.log(filteredFavorite);
        }}
      ></Image>
    </>
  );
};

export default AddToFavorite;
