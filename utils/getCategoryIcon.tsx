import categories from "../texts/types.json";

export const getCategoryIcon = (tag: string | undefined): string => {
  const singleTag = tag?.split(",")[0].toLowerCase().trim();
  const category = categories?.filter(
    (item) => item.name.toLowerCase().trim() === singleTag
  );
  return category[0] && category[0].icon;
};
