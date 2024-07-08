import {
  Controller,
  Route,
  Post,
  Body,
  Get,
  Path,
  Put,
  Delete,
  Query,
} from "tsoa";
import { IUser } from "@/src/database/models/user.model";
import { UserServices } from "../services/user.service";

export interface UserCreationParams {
  name: string;
  email: string;
  age: number;
}

export interface UserUpdateParams {
  name?: string;
  email?: string;
  age?: number;
}

const userServices = new UserServices();

@Route("/v1/users")
export class UserController extends Controller {
  @Post("/")
  public async createNewUser(
    @Body() requestBody: UserCreationParams
  ): Promise<IUser> {
    try {
      const newUser = await userServices.UserCreation(requestBody);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  @Get("/GetAllUsers/{sortOption}")
  public async getAllUsers(
    @Path("sortOption") sortOption: string,
    @Query() age?: number
  ): Promise<IUser[]> {
    try {
      const allusers = await userServices.GetAllUsers(sortOption, age);
      return allusers;
    } catch (error) {
      throw error;
    }
  }

  @Get("/GetUserById/{userId}")
  public async getUserById(@Path("userId") userId: string): Promise<IUser> {
    try {
      const user = await userServices.GetUserById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  @Put("/updateUserById/{userId}")
  public async updateUserById(
    @Path("userId") userId: string,
    @Body() requestBody: UserUpdateParams
  ): Promise<IUser> {
    try {
      const updateUser = await userServices.UpdateUserById(userId, requestBody);
      return updateUser;
    } catch (error) {
      throw error;
    }
  }

  @Delete("/{userId}")
  public async deleteUserById(@Path("userId") userId: string): Promise<IUser> {
    try {
      const deteleUser = await userServices.DeleteUserById(userId);
      return deteleUser;
    } catch (error) {
      throw error;
    }
  }

  @Get("/GetUserByAgeRange")
  public async getUserByAgeRange(
    @Query() minAgeRange: number,
    @Query() maxAgeRange: number
  ): Promise<IUser[]> {
    try {
      const userAgeRange = await userServices.GetUserByAgeRange(
        minAgeRange,
        maxAgeRange
      );
      return userAgeRange;
    } catch (error) {
      throw error;
    }
  }
}
