import CardType, { Inputs, TextAreas, MultiSelects, Select } from "./card.type";
import { ChangeEvent } from "react";

type FormItem = {
  label?: string;
  helper?: string;
  required?: boolean;
};

export type FormSelects = FormItem & {
  name: Select;
  onFieldChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  chosen?: string;
};

export type FormInputs = FormItem & {
  name: Inputs;
  onFieldChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  success?: boolean;
  error?: boolean;
  key?: number;
};

export type FormMultiSelects = FormItem & {
  name: MultiSelects;
  onFieldChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  chosen?: string;
};

export type FormTextAreas = FormItem & {
  name: TextAreas;
  onFieldChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | number;
};

export type FormLabelType = {
  label?: string;
  name: keyof CardType;
  required?: boolean;
};
