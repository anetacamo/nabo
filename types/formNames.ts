import form from "../texts/new-member.json";

const inputs = [
  "title",
  "address",
  "link",
  "longitude",
  "latitude",
  "type",
  "tags",
  "invisible",
  "description",
  "howtouse",
] as const;

enum FormContentType {
  INPUT,
  SELECT,
  MULTISELECT,
  TEXTAREA,
}

type FormContentItem = {
  name: (typeof inputs)[number];
  role: FormContentType;
  label?: string;
  helper?: string;
};

const title: FormContentItem = {
  name: "title",
  role: 1,
  label: form.inputs[0].label,
  helper: form.inputs[0].helper,
};

// const allFormNames = {
//   inputs = ["title", "address", "link", "longitude", "latitude"],
//   selects = ["type"],
//   multiSelects = ["tags", "invisible"],
//   textAreas = ["description", "howtouse"],
// };
