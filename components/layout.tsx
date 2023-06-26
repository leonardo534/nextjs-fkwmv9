import { ReactElement } from 'react';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <header>Layout</header>
      <div>{children}</div>
      <footer>footer</footer>
    </>
  );
}
