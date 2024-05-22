import React, { Suspense } from "react";
import { DataType } from "../page";
import { API } from "../utils/const";
interface Props {
  params: { id: number };
}

const UserDetail = async ({ params: { id } }: Props) => {
  const res = await fetch(`${API}${id}`);
  const data: DataType = await res.json();

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.email}</div>
    </div>
  );
};

export default UserDetail;
