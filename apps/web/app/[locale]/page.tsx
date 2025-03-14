import { ReactElement } from 'react';
import { HomeView } from '@m8d/web/home/features/view';
import { BaseLayout } from '@m8d/web/shared/features/base-layout';

export default function Index(): ReactElement {
  return (
    <main>
      <BaseLayout>
        <HomeView />
      </BaseLayout>
    </main>
  );
}
