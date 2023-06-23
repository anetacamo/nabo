import { useState } from "react";
import Link from "next/link";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl } from "react-map-gl";

import styles from "./MapGl.module.scss";
import { slugify } from "../../utils/slugify";
import categories from "../../texts/types.json";
import Blog from "../../types/card.type";

interface MapGiProps {
  posts: Blog[];
}

export default function MapGl({ posts }: MapGiProps) {
  const [name, setName] = useState("");
  const [viewState, setViewState] = useState({
    latitude: 56.15520483651387,
    longitude: 10.245000205993804,
    zoom: 12,
  });

  const getColor = (post: Blog) => {
    const category = categories?.filter(
      (item) => item.name === post?.type?.split(",")[0].toLowerCase().trim()
    );
    return category[0] && category[0].color;
  };

  return (
    <div className={`${styles.mapwhole} desktop`}>
      {/* <h2
        className={styles.mainTitle}
        style={{
          position: 'absolute',
          color: 'black',
          top: 185,
          zIndex: 4,
          textTransform: 'lowercase',
          maxWidth: 500,
          right: 42,
          textAlign: 'right',
          fontSize: 28,
          letterSpacing: 1,
          lineHeight: 1.2,
        }}
      >
        <span className='purple'>Nåbo map</span> is an interactive guide here to
        help you organise all spheres of your cultural event and match you with
        the right people and facilities you might havent even know existed
      </h2> */}
      <Map
        style={{ width: "100vw", height: "500px", position: "relative" }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        maxZoom={17}
        minZoom={12}
        scrollZoom={false}
        mapStyle="mapbox://styles/anetahaha/clbeb4ftc002e14p79cgh7e6t"
        mapboxAccessToken="pk.eyJ1IjoiYW5ldGFoYWhhIiwiYSI6ImNsYmU3MXVpbDAyZ2ozcXBnbmhmZDc4aXUifQ.27PW9H2rbmyeI44A7pgcEQ"
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
                style={name === post.title ? { zIndex: 5 } : { zIndex: 1 }}
              >
                <Link
                  href={`cards/${slugify(post?.title)}`}
                  key={index}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div
                    className={`${styles.point} bg-${getColor(post)} ${
                      name === post.title ? styles.pointed : ""
                    }`}
                    onMouseEnter={() => setName(post.title || "")}
                    onMouseLeave={() => setName("")}
                  >
                    {/* <img
                      src={`/categories/${getColor(post)}2.png`}
                      alt={`icon`}
                      className={styles.icon}
                    /> */}
                    <div
                      className={`${styles.title} ${getColor(post)} ${
                        name === post.title ? styles.opened : ""
                      }`}
                    >
                      {name === post.title ? name : ""}
                      <span style={{ color: "#dddddd" }}>
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
