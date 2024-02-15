import { IconNameValues, IconVariantValues } from '../constants';
import { Size } from './size';

export type IconName = (typeof IconNameValues)[number];
export type IconVariant = (typeof IconVariantValues)[number];
export type IconParams = { name: IconName; variant?: IconVariant; size?: Size } | IconName;
