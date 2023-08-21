// ---Dependencies
import React from 'react';
// ---Styles
import { getRowClassNames, setDebugStyles } from './useStyles';
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
export function Mrow(props: MrowProps) {
  // -----------------------CONSTS, HOOKS, STATES
  const { space, debug, className, style, children } = props;
  const debugStyles = debug && setDebugStyles();
  const classNames = getRowClassNames({ space, debugClassName: debugStyles });

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
};
