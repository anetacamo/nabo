import { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import styles from './MapGl.module.scss';

import { camelize } from '../../utils/camelize';
import { categoryColors } from '../../types/colors.type';
import CategoryColorsType from '../../types/categoryColors.type';

interface MapGiProps {
  posts?: any;
}

export default function MapGl({ posts }: MapGiProps) {
  const [name, setName] = useState('');
  const [viewState, setViewState] = useState({
    latitude: 56.14788383454515,
    longitude: 10.210058485187,
    zoom: 14,
  });

  return (
    <>
      <Map
        style={{ width: '100vw', height: '500px' }}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        maxZoom={17}
        minZoom={13}
        scrollZoom={false}
        mapStyle='mapbox://styles/anetahaha/clbeb4ftc002e14p79cgh7e6t'
        mapboxAccessToken='pk.eyJ1IjoiYW5ldGFoYWhhIiwiYSI6ImNsYmU3MXVpbDAyZ2ozcXBnbmhmZDc4aXUifQ.27PW9H2rbmyeI44A7pgcEQ'
      >
        <NavigationControl />
        {posts.map(
          (post: any, index: number) =>
            post.frontmatter.longitude && (
              <Marker
                key={index}
                latitude={post.frontmatter.latitude}
                longitude={post.frontmatter.longitude}
              >
                <div
                  className={`${styles.point} bg-${
                    categoryColors[
                      camelize(
                        post?.frontmatter.type as keyof CategoryColorsType
                      )
                    ]
                  }`}
                  onMouseEnter={() => setName(post.frontmatter.title)}
                  onMouseLeave={() => setName('')}
                >
                  <img
                    src={`/cards/star.png`}
                    alt={`icon`}
                    className={styles.icon}
                  />
                  {/* // @ts-expect-error */}
                  <div
                    className={`${styles.title} bg-${
                      categoryColors[camelize(post?.frontmatter.type)]
                    } ${name === post.frontmatter.title ? styles.opened : ''}`}
                  >
                    {name === post.frontmatter.title ? name : ''}
                    <span className='gray'>
                      {' '}
                      {name === post.frontmatter.title
                        ? post.frontmatter.address
                        : ''}
                    </span>
                  </div>
                </div>
              </Marker>
            )
        )}
      </Map>
    </>
  );
}
