type CardType = {
  title: string;
  supertag?: string;
  type: string;
  credit?: string;
  image?: string;

  link?: string;
  address?: string;
  latitude?: number;
  longitude?: number;

  tags?: string;
  invisible?: string;
  description: string;
  howtouse?: string;
};

export type Multiselects = Omit<CardType, "longitude" | "latitude">;

export const emptyMember = {
  title: "",
  supertag: "",
  type: "",
  credit: "",
  image: "",

  link: "",
  address: "",
  latitude: 0,
  longitude: 0,

  tags: "",
  invisible: "",
  description: "",
  howtouse: "",
};

export default CardType;
