export type RandomUserApi = {
  results: User[];
};

export type User = {
  name: Name;
  email: string;
  phone: string;
  picture?: Picture;
};

export type Name = {
  first: string;
  last: string;
};

export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};