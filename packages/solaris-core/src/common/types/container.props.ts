import { Breakpoints } from './breakpoints';
import { ContainerType } from './container';

export type IBox = {
  breakpoints?: Breakpoints;
};
export type IElement = {
  element?: ContainerType;
};

export type ContainerProps = HTMLDivElement & IBox & IElement;
