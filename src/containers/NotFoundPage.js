import React from 'react';

import ErrorStatus from '../components/routes/ErrorStatus';

const NotFoundPage = () => (
  <ErrorStatus code={404}>
    <div>
      <p>404 page not found :(</p>
    </div>
  </ErrorStatus>
);

export default NotFoundPage;