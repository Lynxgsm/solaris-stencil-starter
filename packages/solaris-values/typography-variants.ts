import { TitleTypeValues } from "./titles";

export const TypographyVariantValues = [
  "p",
  ...TitleTypeValues,
  "link",
  "caption",
  "subtitle",
  "small",
] as const;
