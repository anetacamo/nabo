import categories from "../texts/types.json";

export const getColor = (tag: string | undefined): string => {
  const category = categories?.filter(
    (item) => item.name.toLowerCase().trim() === tag?.toLowerCase().trim()
  );
  return category[0] && category[0].color;
};
