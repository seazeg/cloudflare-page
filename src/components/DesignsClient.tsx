'use client';

import { useEffect } from 'react';
import { useAnimation } from '@/hooks/useAnimation';

interface DesignsClientProps {
  children: React.ReactNode;
}

export function DesignsClient({ children }: DesignsClientProps) {
  useAnimation();

  return <>{children}</>;
}
