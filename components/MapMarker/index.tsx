import { Marker } from "react-map-gl";
import { useState } from "react";
import Blog from "../../types/card.type";
import { slugify } from "../../utils/slugify";
import styles from "./MapMarker.module.scss";
import Link from "next/link";
import { getColor } from "../../utils/getColor";

interface MapMarkerProps {
  post: Blog;
  name: string;
}

export default function MapMarker({ post, name }: MapMarkerProps) {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHoveredMarker(title);
  };

  const handleMouseLeave = () => {
    setHoveredMarker(null);
  };

  return (
    <Marker
      key={slugify(post.title)}
      latitude={post.latitude || 0}
      longitude={post.longitude || 0}
      style={
        name === post.title || hoveredMarker === post.title
          ? { zIndex: 5 }
          : { zIndex: 1 }
      }
    >
      <div
        onMouseEnter={() => handleMouseEnter(post.title)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={`cards/${slugify(post?.title)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div
            className={`${styles.point} bg-${getColor(post.type)} ${
              name === post.title ? styles.pointed : ""
            }`}
            onMouseEnter={() => setName(post.title)}
            onMouseLeave={() => setName("")}
          >
            <img
              src={`/categories/${getColor(post.type)}2.png`}
              alt={`icon`}
              className={styles.icon}
            />
            <div
              className={`${styles.title} ${getColor(post.type)} ${
                name === post.title ? styles.opened : ""
              }`}
            >
              <b>{name === post.title ? name : ""}</b>
              <span style={{ color: "black" }}>
                {" "}
                {name === post.title ? post.address : ""}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </Marker>
  );
}
