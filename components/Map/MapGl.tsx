import { useState } from "react";
import Link from "next/link";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl } from "react-map-gl";
import styles from "./MapGl.module.scss";
import { slugify } from "../../utils/slugify";
import Blog from "../../types/card.type";
import { getColor } from "../../utils/getColor";
import pagedata from "../../texts/home.json";

interface MapGlProps {
  posts: Blog[];
}

export default function MapGl({ posts }: MapGlProps) {
  const [name, setName] = useState("");
  const [viewState, setViewState] = useState({
    latitude: 56.15520483651387,
    longitude: 10.245000205993804,
    zoom: 12,
  });

  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setHoveredMarker(title);
  };

  const handleMouseLeave = () => {
    setHoveredMarker(null);
  };

  return (
    <div className={`${styles.mapwhole} desktop`}>
      <div className={styles.textContainer}>
        <div className={styles.mainTitle}>
          <h1>{pagedata.title}</h1>
          <p>{pagedata.description}</p>
        </div>
      </div>
      <Map
        style={{ width: "100vw", height: "500px", position: "relative" }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        maxZoom={17}
        minZoom={12}
        scrollZoom={false}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        <NavigationControl />
        {posts.map(
          (post: Blog, index: number) =>
            !isNaN(post.longitude || 0) &&
            !isNaN(post.latitude || 0) && (
              <Marker
                key={index}
                latitude={post.latitude}
                longitude={post.longitude}
                style={
                  name === post.title || hoveredMarker === post.title
                    ? { zIndex: 5 }
                    : { zIndex: 1 }
                }
                onMouseEnter={() => handleMouseEnter(post.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`cards/${slugify(post?.title)}`}
                  key={index}
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
              </Marker>
            )
        )}
      </Map>
    </div>
  );
}
