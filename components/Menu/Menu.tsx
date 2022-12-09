import Link from 'next/link';
import SkipNav from '../SkipNav/SkipNav';
import styles from './Menu.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';
import LargeMenu from '../LargeMenu/LargeMenu';

export default function Menu() {
  const menuItems = [
    { name: 'venue', link: '/', color: 'gray' },
    { name: 'workspaces', link: '/', color: 'yellow' },
    { name: 'accomodation', link: '/', color: 'salmon' },
    { name: 'catering', link: '/', color: 'purplelight' },
    { name: 'community', link: '/', color: 'green' },
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
