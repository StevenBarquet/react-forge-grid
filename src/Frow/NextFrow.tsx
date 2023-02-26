// ---Dependencies
import React, { useEffect, useState } from 'react';
// ---Types
import { CSSSAtributes, UniqueCSS } from '../typings';
// ---Styles
import { getRowClassNames, setDebugStyles } from './useNextStyles';
import './rowlStyles.css';
import { FrowProps } from './Wrapper';

export const isBrowser = typeof window !== 'undefined';

/**
 * Row Component: Control all the "Col" components, it
 * should only contain "Col"s as child components and allows
 * you to control behaviors in all your grid such as spacing
 * between your "Col", etc.
 * @param {FrowProps} props Properties that controls some global behavior in all your grid
 */
export function NextFrow(props: FrowProps) {
  // -----------------------CONSTS, HOOKS, STATES
  const { children, hSpace, vSpace, debug, className, style: styledProp } = props;
  const [debugStyles, setDebug] = useState<UniqueCSS | undefined>(undefined);
  useEffect(()=>{
    if(isBrowser && debug){
      setDebug(setDebugStyles())
    }
  },[isBrowser, debug])
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