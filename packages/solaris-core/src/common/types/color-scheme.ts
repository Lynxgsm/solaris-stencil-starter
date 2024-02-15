import { ColorSchemeValues, ColorValues } from '../constants';

export type ColorScheme = (typeof ColorSchemeValues)[number];
export type Color = ColorScheme | (typeof ColorValues)[number];
