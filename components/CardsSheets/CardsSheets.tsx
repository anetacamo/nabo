import Blog from "../../types/card.type";
import styles from "./CardsSheets.module.scss";
import { Card } from "../Card";

export default function CardsSheets(members: { members: Blog[] }) {
  return (
    <div className={`flex-center ${styles.container}`}>
      {members.members.map((post: Blog, index: number) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}
