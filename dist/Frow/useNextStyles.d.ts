import { UniqueCSS } from "../typings";
/**
 * Generate unique styles for the specific Row depending on the properties for the row
 * @param {Props} props - Props for handle the spacing between cols and to activate the debug mode
 * @returns {string} CSS styles
 */
export declare const setDebugStyles: () => UniqueCSS;
interface Props {
    hSpace?: number;
    vSpace?: number;
    debugClassName?: false | UniqueCSS | undefined;
}
/**
 * Generate unique styles for the specific Row depending on the properties for the row
 * @param {Props} props - Props for handle the spacing between cols and to activate the debug mode
 * @returns {UniqueCSS} CSS styles
 */
export declare function getRowClassNames(props: Props): string;
export {};
