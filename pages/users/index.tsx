import { ReactElement } from 'react';

export default function UsersPage() {
  return <div>Users Page</div>;
}

UsersPage.getLayout = function (page: ReactElement) {
  return (
    <>
      <h1>Users Layout</h1>
      <>{page}</>
      <footer>Users Layout Footer</footer>
    </>
  );
};
