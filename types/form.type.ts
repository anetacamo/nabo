import sheetNames from "./formItems.type";

// reusable type alias | union type
export type Inputs = (typeof sheetNames)[number];

type FormType = {
  label?: string;
  name: Inputs;
  helper?: string;
  required?: boolean;
};
export default FormType;
