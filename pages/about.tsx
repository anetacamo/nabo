import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import styles from './HowToUse/HowToUse.module.scss';
import sections from '../texts/home.json';
import Section from '../components/Section/Section';

export default function About() {
  const title = 'About';

  return (
    <DefaultLayout title={title}>
      <section className='bg-black center'>
        {' '}
        <h2 className={styles.mainTitle}>
          <span className='purple'>How to use this map?</span>
        </h2>
      </section>
      {sections.map((section: any, index: number) => (
        <>
          <Section key={index} {...section} />
        </>
      ))}
    </DefaultLayout>
  );
}
