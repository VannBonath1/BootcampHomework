import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { MyContext } from "../App";
import { HomeContext } from "../Home";
import { useContext } from "react";

import { ChangeEvent, useState } from "react";

const FormCreate: React.FC = () => {
  const myData1 = useContext(HomeContext);
  if (!myData1) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  const myData = useContext(MyContext);
  if (!myData) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  const setInitialItems = myData.setInitialItems;
  const initialItems = myData.initialItems;
  const setIsPopUp = myData1.setIsPopUp;

  //zod
  const schema = z.object({
    fileName: z.string().min(1, { message: "File name is required" }),
    creator: z
      .string()
      .min(3, { message: "Creator must be at least 3 characters" }),
    image: z.any(),
  });
  type FormInputs = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    console.log(initialItems);
    setInitialItems([
      ...initialItems,
      {
        fileName: data.fileName,
        creator: data.creator,
        image: image,
      },
    ]);
    setIsPopUp(false);
  };
  //upload file image
  const [image, setImage] = useState<string | undefined>("");

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          handleImageChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageChange = (value: string) => {
    setImage(value);
  };
  return (
    <>
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
            onChange={handleImage}
            {...(register("image"), { required: true })}
          />
          <br />
          <br />
          <img src={image} alt="" className="upload-imagee" />
          <button className="close-button" onClick={() => setIsPopUp(false)}>
            Close
          </button>
          <button className="create-button" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
};
export default FormCreate;
