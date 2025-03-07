import { ReactElement } from 'react';
import { SecretGardenView } from '@m8d/web/secret-garden/features/view';
import { BaseLayout } from '@m8d/web/shared/features/base-layout';

export default function Index(): ReactElement {
  return (
    <main>
      <BaseLayout>
        <SecretGardenView />
      </BaseLayout>
    </main>
  );
}
