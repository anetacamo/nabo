import Link from 'next/link';
import styles from './LargeMenu.module.scss';

export default function Footer() {
  const menuItems = [
    { name: 'kort', link: 'map' },
    { name: 'brugere', link: 'members' },
    { name: 'viden om', link: 'about' },
    { name: 'foreningen', link: 'association' },
  ];
  return (
    <div className={`flex-between' ${styles.largeMenu} bg-purple`}>
      <div className='flex'>
        <div className={styles.column} style={{ minWidth: 200 }}>
          {menuItems.map((item, index) => (
            <Link href={`/${item.link}`} key={index}>
              <h3 className={styles.menuItem}>{item.name}</h3>
            </Link>
          ))}
          {/* <p style={{ maxWidth: 400 }}>
            To see the exact date and all sorts of upcoming activities, check
            the facebook site of Sydhaven. or click any of the following links.
            To see the exact date and all sorts of upcoming activities, check
            the facebook site of Sydhaven. or click any of the following links
          </p> */}
          <Link href='/'>F</Link>
          <Link href='/'>LI</Link>
          <Link href='/'>Ig</Link>
        </div>
        {/* <div className={styles.column}>
          <h3>Engage</h3>
          <li className={styles.li}>
            <Link href='/'>Become a board member</Link>
          </li>
          <li className={styles.li}>
            <Link href='/'>Become a sponsor</Link>
          </li>
          <li className={styles.li}>
            <Link href='/'>Instagram takeover</Link>
          </li>
          <li className={styles.li}>
            <Link href='/'>Skriv til sydhaven</Link>
          </li>
          <li className={styles.li}>
            <Link href='/'>Also part of Sydhaven?</Link>
          </li>

          <Link href='/'>F</Link>

          <Link href='/'>LI</Link>

          <Link href='/'>Ig</Link>
        </div>

        <div className={styles.column}>
          <h3>Members</h3>
          <h3>Categories</h3>
        </div> */}
        <div className={styles.column}>
          <h3>Partners</h3>
          <li className={styles.li}>
            <Link href='www.sydhavnenskvarteret.dk'>Sydhavens Kvarteret</Link>
          </li>
          <li className={styles.li}>
            <Link href='www.sydhavnensfestival.dk'>Sydhavens Festival</Link>
          </li>
          <li className={styles.li}>
            <Link href='www.sammenomsydhaven.dk'>Sydhavens Festival</Link>
          </li>
        </div>
      </div>
      <p className='right'>
        copyright Sydhaven 2022 | code & design by{' '}
        <Link href='/'>AnetaCamo</Link>
      </p>
    </div>
  );
}
