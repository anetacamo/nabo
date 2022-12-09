import LeftMenu from "../components/LeftMenu/LeftMenu";
import { SinglePageLayout } from "../layouts/SinglePageLayout/SinglePageLayout";

const Vision = () => {
  const title = "Vision";
  return (
    <>
      <SinglePageLayout title={title}>
        {title}
        <p>
          Local members - what do they want to share - links to the pages,
          description all
        </p>
      </SinglePageLayout>
      <LeftMenu items={["history", "presence", "vision"]} />
    </>
  );
};

export default Vision;
