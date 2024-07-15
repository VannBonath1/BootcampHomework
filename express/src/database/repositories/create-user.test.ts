import { IUser, UserModel } from "../models/user.model";
import mongoose from "mongoose";
import { UserRepository } from "./user.repositories";

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://checkme:WBfI7SnuB4XLD8d4@clustercheckme.fbljtcs.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=ClusterCheckme"
  );
  console.log("Connected to MongoDB");
}, 60000);

afterAll(async () => {
  await mongoose.disconnect();
}, 60000);

describe("UserRepository", () => {
  const userRepository = new UserRepository();
  it("should create a new user and return it", async () => {
    const requestBody: IUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 24,
    };
    const createdUser = await userRepository.UserCreation(requestBody);
    expect(createdUser.email).toEqual("john.doe@example.com");
  }, 60000);

  it("should throw an error if UserModel.create fails", async () => {
    const invalidUserData: IUser = {
      name: "ayo",
      email: "invalid@gmail.com",
      age: 25,
    };
    jest.spyOn(UserModel, "create").mockRejectedValue(new Error("oof"));
    await expect(UserModel.create(invalidUserData)).rejects.toThrow("oof");
    await expect(UserModel.create(invalidUserData)).rejects.toHaveProperty(
      "message",
      "oof"
    );
  }, 60000);
});
