import { ReactNode } from 'react';
export interface MrowProps {
    /** Horizontal space in px from 0 - 50 between all the "Cols" in this "Row" */
    space?: number;
    /** Useful property for development, gives background colors to your "Row" and "Cols" to build easier your layout */
    debug?: boolean;
    /** "ClassName" css selector */
    className?: string;
    /** CSS inline Object */
    style?: Record<string, string | number | undefined>;
    /** Cols as children */
    children?: ReactNode;
}
export declare function Wrapper(props: MrowProps): JSX.Element;
