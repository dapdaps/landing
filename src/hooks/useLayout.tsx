import type { ReactElement } from 'react';


import { SimpleLayout } from '@/components/layouts/SimpleLayout';


export function useSimpleLayout(page: ReactElement) {
  return <SimpleLayout>{page}</SimpleLayout>;
}

