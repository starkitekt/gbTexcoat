'use client';
import { ReactNode } from 'react';
import { Icon } from './Icons';

interface BtnProps {
  children: ReactNode;
  kind?: 'primary' | 'ghost' | 'mono';
  onClick?: () => void;
  arrow?: boolean;
  className?: string;
  [k: string]: unknown;
}

export function Btn({ children, kind = 'primary', onClick, arrow = false, className = '', ...rest }: BtnProps) {
  const cls = kind === 'primary' ? 'btn btn-primary' : kind === 'mono' ? 'btn btn-mono' : 'btn btn-ghost';
  return (
    <button className={`${cls} ${className}`} onClick={onClick} {...rest}>
      <span>{children}</span>
      {arrow && <span className="arrow"><Icon.arrow /></span>}
    </button>
  );
}
