// UserRepository.test.ts

import { UserRepository } from "../repositories/user.repositories";
import { IUser, UserModel } from "../models/user.model";

import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://checkme:WBfI7SnuB4XLD8d4@clustercheckme.fbljtcs.mongodb.net/Bookstore?retryWrites=true&w=majority&appName=ClusterCheckme"
  );
  console.log("ok");
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("UserRepository", () => {
  describe("UserCreation", () => {
    it("should create a new user and return it", async () => {
      const requestBody: IUser = {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 24,
        // Add other necessary fields here
      };

      const newUser: IUser = {
        ...requestBody,
      };

      // Mock the create method to return the new user
      (UserModel.create as jest.Mock).mockResolvedValue(newUser);

      const userRepository = new UserRepository();
      const result = await userRepository.UserCreation(requestBody);

      expect(result).toEqual(newUser);
      expect(UserModel.create).toHaveBeenCalledWith(requestBody);
    });

    it("should throw an error if UserModel.create fails", async () => {
      const requestBody: IUser = {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        age: 24,
        // Add other necessary fields here
      };

      const error = new Error("Database error");
      (UserModel.create as jest.Mock).mockRejectedValue(error);

      const userRepository = new UserRepository();

      await expect(userRepository.UserCreation(requestBody)).rejects.toThrow(
        error
      );
    });
  });
});
