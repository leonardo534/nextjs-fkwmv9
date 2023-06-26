import { ReactElement } from 'react';

type BlogsPageProps = {};
export default function BlogsPage(props: BlogsPageProps) {
  return <div>BlogsPage</div>;
}

BlogsPage.getLayout = function (page: ReactElement) {
  return (
    <>
      <h1>Blogs Layout</h1>
      <>{page}</>
      <footer>Blogs page footer</footer>
    </>
  );
};
