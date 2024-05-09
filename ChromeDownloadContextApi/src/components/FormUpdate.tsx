import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { MyContext } from "../App";
import { HomeContext } from "../Home";
import { useContext } from "react";

const FormUpdate: React.FC = () => {
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
  const selectedItemIndex = myData1.selectedItemIndex;

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
    const updatedItems = [...initialItems];
    const selectedIndex = selectedItemIndex || 0;
    updatedItems[selectedIndex].fileName = data.fileName;
    updatedItems[selectedIndex].creator = data.creator;
    updatedItems[selectedIndex].image = data.image;
    setInitialItems(updatedItems);
    setIsPopUp(false);
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
            defaultValue={initialItems[selectedItemIndex || 0].fileName}
          />
          {errors.fileName && <span>{errors.fileName.message}</span>}
          <br />
          <label className="creator-label">Creator</label>
          <br />
          <input
            className="creator-input"
            type="text"
            {...register("creator", { required: true })}
            defaultValue={initialItems[selectedItemIndex || 0].creator}
          />
          {errors.creator && <span>{errors.creator.message}</span>}
          <br />
          <input
            className="upload-image"
            type="file"
            {...(register("image"), { required: false })}
          />

          <button className="close-button" onClick={() => setIsPopUp(false)}>
            Close
          </button>
          <button className="create-button" type="submit">
            Update
          </button>
        </div>
      </form>
    </>
  );
};
export default FormUpdate;
