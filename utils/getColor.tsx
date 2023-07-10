import categories from "../texts/types.json";

export const getColor = (tag: string | undefined): string => {
  console.log(tag?.split(",")[0].toLowerCase().trim());
  const singleTag = tag?.split(",")[0].toLowerCase().trim();
  const category = categories?.filter(
    (item) => item.name.toLowerCase().trim() === singleTag
  );
  return category[0] && category[0].color;
};
