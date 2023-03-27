import Link from 'next/link';
import SkipNav from '../SkipNav/SkipNav';
import styles from './Menu.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';
import LargeMenu from '../LargeMenu/LargeMenu';

export default function Menu() {
  const menuItems = [
    { name: 'how to use', link: '/how-to-use', color: 'lightblue' },
    { name: 'about', link: '/about', color: 'yellow' },
    { name: 'join the map', link: '/new-member', color: 'salmon' },
    { name: 'map view', link: '/map-view', color: 'purplelight' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='menu'>
        <div className={`${styles.logo} logo h2`}>S</div>
      </div>
      <nav
        role='navigation'
        className={`bg-black menu ${styles.nav} ${open && styles.open} `}
      >
        <SkipNav />
        <Link href='/'>
          <a className={`${styles.logo} logo h2`}>Nåbø Map</a>
        </Link>

        <div className='flex desktop'>
          {menuItems.map((item, index) => (
            <Link href={`/${item.link}`} key={index}>
              <a className={`${styles.li} li ${item.color}`}>{item.name}</a>
            </Link>
          ))}
        </div>
        <Hamburger onButtonClick={() => setOpen(!open)} />
        {/* <Link href='/'>
        <a className={`${styles.logo} h2`}>D</a>
      </Link> */}
      </nav>

      {open && <LargeMenu />}
    </>
  );
}
