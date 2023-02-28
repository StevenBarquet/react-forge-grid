import { ReactNode } from 'react';
export interface FrowProps {
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
export declare function Wrapper({ nextjs, ...props }: FrowProps): JSX.Element;
