/// <reference types="react" />
import './rowStyles.css';
import { MrowProps } from './Wrapper';
/**
 * Row Component: Control all the "Col" components, it
 * should only contain "Col"s as child components and allows
 * you to control behaviors in all your grid such as spacing
 * between your "Col", etc.
 * @param {Props} props Properties that controls some global behavior in all your grid
 * @returns {Component<{}>} Qwik component
 */
export declare function Mrow(props: MrowProps): JSX.Element;
