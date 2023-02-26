/// <reference types="react" />
import { FrowProps } from '../typings';
import './rowlStyles.css';
/**
 * Row Component: Control all the "Col" components, it
 * should only contain "Col"s as child components and allows
 * you to control behaviors in all your grid such as spacing
 * between your "Col", etc.
 * @param {FrowProps} props Properties that controls some global behavior in all your grid
 */
export declare function Frow(props: FrowProps): JSX.Element;
