import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';

export default function About() {
  const title = 'About';

  return (
    <DefaultLayout title={title}>
      <section className='bg-black center'></section>
    </DefaultLayout>
  );
}
