'use client';

import { Provider } from 'react-redux';
import { useRef } from 'react';
import { AppStore, makeStore } from '@/lib/store';

export function Providers({ children }: { children: React.ReactNode }) {
  // Important: create store once per component mount (avoids hydration mismatch)
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}