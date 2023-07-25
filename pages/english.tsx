import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import pagedata from "../texts/english.json";
import Section from "../components/Section/Section";
import TypeCards from "../components/TypeCards/TypeCards";
import CrookedImage from "../components/CrookedImage/CrookedImage";
import SectionType from "../types/section.type.ts";

export default function English() {
  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
    >
      <CrookedImage image={pagedata.image}>
        <h1>{pagedata.title}</h1>
        <p>{pagedata.description}</p>
      </CrookedImage>
      {pagedata.sections.map((section: SectionType, index: number) => (
        <Section key={index} {...section} />
      ))}
      <section>
        <TypeCards en />
      </section>
    </DefaultLayout>
  );
}
