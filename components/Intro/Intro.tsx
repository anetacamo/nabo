import Paragraph from "../Paragraph/Paragraph";
import StarsDivider from "../StarsDivider";
import Image from "next/image";
import styles from "./Intro.module.scss";

interface IntroProps {
  background?: string;
}

export default function Intro({ background }: IntroProps) {
  return (
    <section
      className="grid center"
      style={{
        padding: "240px 0",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
        color: "white",
        position: "relative",
      }}
    >
      <div className={styles.blackOverlay}></div>
      <h4
        style={{
          maxWidth: 800,
          margin: "auto",
          fontSize: 40,
          zIndex: 2,
          position: "relative",
        }}
      >
        <span className="purple">South Harbour</span> is an area in Aarhus west.
        To see the exact date and all sorts of upcoming activities, check the
        facebook site of
      </h4>
    </section>
  );
}
