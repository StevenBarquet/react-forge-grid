import { ReactNode } from 'react';
import { GridSystem } from './useStyles';
import './colStyles.css';
export interface FcolProps extends GridSystem {
    className?: string;
    style?: any;
    children?: ReactNode;
}
/**
 * Col Component: Container that allows you handle all your grid content controlling it
 * based in a percentage way instead of classic 12 or 24 columns per row allowing you
 * to handle up to 100 columns per row.
 * @param {FcolProps} props Properties that controls the width of your "Cols" in percentage with static width (span) or with responsive behaviors(xs, sm, md lg, xl, xxl)
 */
export declare function Fcol(props: FcolProps): JSX.Element;
