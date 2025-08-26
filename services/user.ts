import axios from "@/lib/axios";
import { RandomUserApi, User } from "@/types/User";

export const getUserDetail = async (): Promise<User> => {
  const res = await axios.get<RandomUserApi>("https://randomuser.me/api/?results=1&nat=us");
  const raw = res.data.results[0];

  const user: User = {
    name: {
      first: raw.name.first,
      last: raw.name.last,
    },
    email: raw.email,
    phone: raw.phone,
    picture: raw.picture,
  };

  return user;
};
