type CardType = {
  title: string;
  supertag?: string;
  type: string;
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
  address: "",
  link: "",
  latitude: 0,
  longitude: 0,
  type: "events",
  tags: "",
  invisible: "",
  description: "",
  howtouse: "",
};

export default CardType;
