import Link from "next/link";
import Image from "next/image";
import { API } from "./utils/const";
import AddToFavorite from "./Component/AddToFavorite";

export interface DataType {
  id: number;
  name: string;
  email: string;
  avatar: string;
  searchParams: { page: string };
  isFavorite: boolean;
}

let allData: DataType[] = [];

// not sure ai did this for me
const uniqueIds = new Set<number>();

const DataFetching = async ({ searchParams: { page } }: DataType) => {
  const currentPage: number = parseInt(page || "1", 10);
  const res = await fetch(`${API}?page=${currentPage}&limit=3`);
  const data: DataType[] = await res.json();

  // Filter out duplicate data based on the ID(ai did this)
  const newData = data.filter((item) => {
    if (uniqueIds.has(item.id)) {
      return false;
    }
    uniqueIds.add(item.id);
    return true;
  });

  allData = [...allData, ...newData];

  return (
    <>
      <div className="flex justify-center">
        <div>
          {allData.map((data, index) => (
            <div key={data.id} className="border-2 border-blue-300 w-40 ">
              <Link href={`/DataFetching/${data.id}`}>
                <div className="flex justify-center">
                  <Image
                    src={data.avatar}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>
                <p className="text-center">{data.name}</p>
              </Link>
              <div>
                <AddToFavorite allData={allData} dataId={data.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-5 pb">
        <Link
          href={{ pathname: "/DataFetching", query: { page: currentPage + 1 } }}
        >
          <button className="border-2 border-blue-300">Show More</button>
        </Link>
      </div>
    </>
  );
};

export default DataFetching;
