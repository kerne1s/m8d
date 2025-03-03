import { ReactElement } from 'react';
import { HomeView } from '@m8d/web/home/features/view';
import { HomeWrapper } from '@m8d/web/home/ui/wrapper';

export default function Index(): ReactElement {
  return (
    <main>
      <HomeWrapper>
        <HomeView />
      </HomeWrapper>
    </main>
  );
}
