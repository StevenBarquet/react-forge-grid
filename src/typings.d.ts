import { HTMLAttributes, ReactNode } from "react";

/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent }
}

export type CSSSAtributes = HTMLAttributes<HTMLDivElement>['style'];

export interface UniqueCSS {
  parentClassName: string;
  styles: string;
}

interface FrowProps {
  /** Horizontal alignment for all the "Cols" in this "Row" */
  hAlign?: 'center' | 'start' | 'end';
  /** Vertical alignment for all the "Cols" in this "Row" */
  vAlign?: 'top' | 'middle' | 'bottom';
  /** Horizontal space in px from 0 - 10 between all the "Cols" in this "Row" */
  hSpace?: number;
  /** Vertical space in px from 0 - 10 between all the "Cols" in this "Row" */
  vSpace?: number;
  /** Useful property for development, gives background colors to your "Row" and "Cols" to build easier your layout */
  debug?: boolean;
  /** Allows debug in nextjs App */
  nextjs?: boolean;
  /** "ClassName" css selector */
  className?: string;
  /** CSS inline Object */
  style?: Record<string, string | number | undefined>;
  /** Cols as children */
  children?: ReactNode;
}