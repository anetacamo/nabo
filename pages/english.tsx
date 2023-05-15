import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import sections from '../texts/english.json';
import Section from '../components/Section/Section';
import TypeCards from '../components/TypeCards/TypeCards';
import CrookedImage from '../components/CrookedImage/CrookedImage';

export default function English() {
  const title = 'English';
  const description = 'something about page';

  return (
    <DefaultLayout title={title} description={description}>
      {sections.map((section: any, index: number) => (
        <>
          <Section key={index} {...section} />
        </>
      ))}
      <CrookedImage image={`/categories/blue.png`}>
        <h1>SOME ABOUT INFO</h1>
        <p>
          Contains some about info, Contains some about info. Skateducate er en
          frivillig forening, der primært arbejder for at få flere kvinder,
          piger og non-binære til at blive en del af skateboardmiljøet.
          Skateducate er en frivillig forening, der primært arbejder for at få
          flere kvinder, piger og non-binære til at blive en del af
          skateboardmiljøet.
        </p>
      </CrookedImage>
      <section>
        <TypeCards />
      </section>
    </DefaultLayout>
  );
}
