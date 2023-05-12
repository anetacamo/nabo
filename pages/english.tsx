import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import sections from '../texts/english.json';
import Section from '../components/Section/Section';
import { types } from '../types/types.type';
import CardsSheets from '../components/CardsSheets/CardsSheets';
import TypeCards from '../components/TypeCards/TypeCards';

export default function Englsih() {
  const title = 'Englsih';

  return (
    <DefaultLayout title={title}>
      {sections.map((section: any, index: number) => (
        <>
          <Section key={index} {...section} />
        </>
      ))}
      <section style={{ marginTop: -80 }}>
        <TypeCards />
      </section>
    </DefaultLayout>
  );
}
