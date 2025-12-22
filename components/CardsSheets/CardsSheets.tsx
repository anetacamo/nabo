import Blog from "../../types/card.type";
import styles from "./CardsSheets.module.scss";
import { Card } from "../Card";

export default function CardsSheets(members: { members: Blog[] }) {
  return (
    <div className={`flex-center ${styles.container}`}>
      {members.members.length > 0 ? (
        members.members.map((post: Blog, index: number) => (
          <Card key={index} post={post} />
        ))
      ) : (
        <p className="center">
          No items found. <br />
          Try changing the search parameters
        </p>
      )}
    </div>
  );
}
