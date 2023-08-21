import React, { ReactNode } from 'react'
import { Frow } from './Frow'
import { NextFrow } from './NextFrow'

export interface FrowProps {
  /** Horizontal alignment for all the "Cols" in this "Row" */
  hAlign?: 'center' | 'start' | 'end';
  /** Vertical alignment for all the "Cols" in this "Row" */
  vAlign?: 'top' | 'middle' | 'bottom';
  /** Horizontal space in px from 0 - 50 between all the "Cols" in this "Row" */
  hSpace?: number;
  /** Vertical space in px from 0 - 50 between all the "Cols" in this "Row" */
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
export function Wrapper(props: FrowProps) {
  const isNextjs = typeof window === 'undefined' && props.debug
  if (isNextjs) return <NextFrow {...props} />
  return <Frow {...props} />
}
