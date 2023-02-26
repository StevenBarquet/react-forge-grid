// ---Dependencies
import React from 'react';
// ---Types
import { CSSSAtributes } from '../typings';
// ---Styles
import { getRowClassNames, setDebugStyles } from './useStyles';
import { FrowProps } from './Wrapper';
import './rowlStyles.css';


/**
 * Row Component: Control all the "Col" components, it
 * should only contain "Col"s as child components and allows
 * you to control behaviors in all your grid such as spacing
 * between your "Col", etc.
 * @param {FrowProps} props Properties that controls some global behavior in all your grid
 */
export function Frow(props: FrowProps) {
  // -----------------------CONSTS, HOOKS, STATES
  const { children, hSpace, vSpace, debug, className, style: styledProp } = props;
  const debugStyles = debug && setDebugStyles();
  const classNames = getRowClassNames({ hSpace, vSpace, debugClassName: debugStyles });

  const style: CSSSAtributes = {
    display: 'block',
    textAlign: props?.hAlign || 'start',
    verticalAlign: props?.vAlign || 'bottom',
    ...styledProp,
  };
  const fullClassNames = className ? `${classNames} ${className}` : classNames;
  // -----------------------RENDER
  return (
    <React.Fragment>
      {debugStyles ? <style>{debugStyles.styles}</style> : null}
      <div className={fullClassNames} style={style}>
        {children}
      </div>
    </React.Fragment>
  );
}


