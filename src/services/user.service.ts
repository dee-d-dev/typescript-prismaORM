import prismaClient from "./db.service";
import { User } from "@prisma/client";

class UserService {
  private user = prismaClient.user;

  async getUsers(): Promise<User[]> {
    const users = await this.user.findMany();
    return users;
  }

  async createUser(firstName: string, lastName: string): Promise<User> {
    const user = await this.user.create({
      data: {
        firstName,
        lastName,
      },
    });
    return user;
  }

  async getUser(): Promise<User[]> {
    const user = await this.user.findMany({
      where: {
        firstName: {
          endsWith: "A",
        },
      },
    });

    return user;
  }
}

export default UserService;
