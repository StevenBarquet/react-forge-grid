import React from 'react'
import { FrowProps } from '../typings'
import { Frow } from './Frow'
import { NextFrow } from './NextFrow'

export function Wrapper({ nextjs, ...props }: FrowProps) {
  if (nextjs) return <NextFrow {...props} />
  return <Frow {...props} />
}
