import { ReactNode } from 'react';
import './rowlStyles.css';
interface Props {
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
    /** "ClassName" css selector */
    className?: string;
    /** CSS inline Object */
    style?: Record<string, string | number | undefined>;
    /** Cols as children */
    children?: ReactNode;
}
/**
 * Row Component: Control all the "Col" components, it
 * should only contain "Col"s as child components and allows
 * you to control behaviors in all your grid such as spacing
 * between your "Col", etc.
 * @param {Props} props Properties that controls some global behavior in all your grid
 */
export declare function Frow(props: Props): JSX.Element;
export {};
