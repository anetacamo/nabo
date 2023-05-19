import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import pagedata from '../texts/about.json';
import Section from '../components/Section/Section';
import CrookedImage from '../components/CrookedImage/CrookedImage';

export default function About() {
  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
    >
      <CrookedImage image={pagedata.image}>
        <h1>{pagedata.title}</h1>
        <p>{pagedata.description}</p>
        <button>read more</button>
      </CrookedImage>
      {pagedata.sections.map((section: any, index: number) => (
        <Section key={index} {...section} />
      ))}
    </DefaultLayout>
  );
}
