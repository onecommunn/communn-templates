import { Field } from "../Form/Field";

export interface ContactFormProps {
  title: string;
  subtitle?: string;
  fields:  Field[];
  onSubmit?: (data: Record<string, string>) => void;
}


