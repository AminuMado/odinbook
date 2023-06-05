import { IUser } from "../../interfaces/user";

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}
