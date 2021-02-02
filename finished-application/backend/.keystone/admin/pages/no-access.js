import React from 'react';

import { NoAccessPage } from '@keystone-next/admin-ui/pages/NoAccessPage';

export default function Home() {
  return <NoAccessPage sessionsEnabled={true} />;
}
