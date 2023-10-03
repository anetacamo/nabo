type CardType = {
  type: string;

  title: string;
  supertag?: string;
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

export type Select = "type";
export type Inputs =
  | "title"
  | "supertag"
  | "credit"
  | "image"
  | "link"
  | "address"
  | "latitude"
  | "longitude"
  | "email";
export type MultiSelects = "tags" | "invisible";
export type TextAreas = "description" | "howtouse";

export const emptyMember = {
  type: "",

  title: "",
  supertag: "",
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
