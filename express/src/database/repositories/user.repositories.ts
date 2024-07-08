import { UserUpdateParams } from "../../controllers/user.controller";
import { IUser, UserModel } from "../../database/models/user.model";

export class UserRepository {
  public async UserCreation(requestBody: IUser): Promise<IUser> {
    try {
      const newUser = await UserModel.create(requestBody);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  public async GetAllUsers(sortOption: string, age?: number): Promise<IUser[]> {
    try {
      const allUsers = await UserModel.find({ age: age }).sort(
        sortOption === "name"
          ? { name: 1 }
          : sortOption === "age"
          ? { age: 1 }
          : ""
      );
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async GetUserById(userId: string): Promise<IUser> {
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw Error;
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async UpdateUserById(
    userId: string,
    requestBody: UserUpdateParams
  ): Promise<IUser> {
    try {
      const updateUser = await UserModel.findByIdAndUpdate(
        userId,
        requestBody,
        {
          new: true,
        }
      );
      if (!updateUser) {
        throw new Error("user not found");
      }
      return updateUser;
    } catch (error) {
      throw error;
    }
  }

  public async DeleteUserById(userId: string): Promise<IUser> {
    try {
      const deteleUser = await UserModel.findByIdAndDelete(userId);
      if (!deteleUser) {
        throw Error;
      }
      return deteleUser;
    } catch (error) {
      throw error;
    }
  }

  public async GetUserByAgeRange(
    minAgeRange: number,
    maxAgeRange: number
  ): Promise<IUser[]> {
    try {
      const userAgeRange = await UserModel.find({
        age: { $gte: minAgeRange, $lte: maxAgeRange },
      });
      return userAgeRange;
    } catch (error) {
      throw error;
    }
  }
}
