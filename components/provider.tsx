'use client';

import { ReactNode } from 'react';
import { IconSprites } from './icons';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <IconSprites />
      {children}
    </>
  );
}
