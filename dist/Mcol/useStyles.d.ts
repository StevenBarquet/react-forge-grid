export interface GridSystem {
    /** Static width of the "Col" */
    span?: number;
    /** Width of the "Col" in extra small devices (0 - 576px) */
    xs?: number;
    /** Width of the "Col" in small devices (576px - 768px) */
    sm?: number;
    /** Width of the "Col" in mid devices (768px - 992px) */
    md?: number;
    /** Width of the "Col" in large devices (992px - 1200px) */
    lg?: number;
    /** Width of the "Col" in extra large devices (1200px - 1600px) */
    xl?: number;
    /** Width of the "Col" in extra extra large devices (1600px and beyond) */
    xxl?: number;
}
/**
 * Generate styles for the specific Col depending on the properties for the Col
 * @param {Props} props - Props for handle the width of the cols
 * @returns {UniqueCSS} CSS styles
 */
export declare function getColClassNames(gridInfo: GridSystem): string;
/**
 * colWidthBalancer: declaraciones explictias del porcentaje que
 * oucpara caada tamaño de pagina
 */
export declare function colWidthBalancer(gridInfo: GridSystem): {
    span: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};
