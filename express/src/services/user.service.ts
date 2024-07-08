import { IUser } from "@/src/database/models/user.model";
import { UserRepository } from "@/src/database/repositories/user.repositories";
import { UserUpdateParams } from "@/src/controllers/user.controller";

const userRepository = new UserRepository();

export class UserServices {
  public async UserCreation(requestBody: IUser): Promise<IUser> {
    try {
      const user = await userRepository.UserCreation(requestBody);
      return user;
    } catch (error) {
      throw error;
    }
  }

  public async GetAllUsers(sortOption: string, age?: number): Promise<IUser[]> {
    try {
      const allUsers = await userRepository.GetAllUsers(sortOption, age);
      return allUsers;
    } catch (error) {
      throw error;
    }
  }

  public async GetUserById(userId: string): Promise<IUser> {
    try {
      const user = await userRepository.GetUserById(userId);
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
      const updateUser = userRepository.UpdateUserById(userId, requestBody);
      return updateUser;
    } catch (error) {
      throw error;
    }
  }

  public async DeleteUserById(userId: string): Promise<IUser> {
    try {
      const deteleUser = await userRepository.DeleteUserById(userId);
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
      const userAgeRange = userRepository.GetUserByAgeRange(
        minAgeRange,
        maxAgeRange
      );
      return userAgeRange;
    } catch (error) {
      throw error;
    }
  }
}
