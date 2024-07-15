// UserRepository.test.ts

import { IUser, UserModel } from "../models/user.model";
import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://checkme:WBfI7SnuB4XLD8d4@clustercheckme.fbljtcs.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=ClusterCheckme"
  );
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("UserRepository", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test to avoid interference
  });
  it("should create a new user and return it", async () => {
    const requestBody: IUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 24,
    };
    expect(requestBody.email).toEqual("john.doe@example.com");
  }, 20000);

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
  }, 20000);
});
