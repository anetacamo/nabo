import Link from 'next/link';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMailForward } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='bg-black'>
      <section className={styles.footer}>
        <div className={styles.column} style={{ maxWidth: 600 }}>
          <h3>About Nabø</h3>
          <p>
            <span className='purplelight'>Nabø </span>is an interactive guide to
            help you organise all spheres of your cultural event and match you
            with the right people and facilities you might havent even know
            existed
          </p>
          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            <Link href='/about'>
              <li>about</li>
            </Link>
          </div>

          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            <Link href='/how-to-use'>
              <li>how to use</li>
            </Link>
          </div>
        </div>
        <div className={styles.column}>
          <h3>contact</h3>
          <p className='purplelight' style={{ margin: 0 }}>
            Frontloberne
          </p>
          <p style={{ margin: 0 }}>Jægegårdsgade 154</p>
          <p style={{ margin: 0 }}>Liam</p>
          <p style={{ margin: 0 }}>Liam@ftontloberne.com</p>
          <p className='purplelight' style={{ marginBottom: 0 }}>
            Sydhavnen
          </p>
          <p style={{ margin: 0 }}>Liam</p>
          <p style={{ margin: 0 }}>Liam@ftontloberne.com</p>
          <div className='divider' style={{ marginLeft: 0 }}></div>
          <h3>Partnered cities</h3>
          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            <Link href='/how-to-use'>
              <li>Nabø Tromsø</li>
            </Link>
          </div>{' '}
          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            <Link href='/how-to-use'>
              <li>Nabø Ribe</li>
            </Link>
          </div>
          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            <Link href='/how-to-use'>
              <li>Nabø Tromsø</li>
            </Link>
          </div>
        </div>
        <div style={{ paddingRight: 120 }} className={styles.column}>
          <h3>Engage</h3>

          <p className='purplelight' style={{ margin: 0 }}>
            Should you be on the map?
          </p>
          <p style={{ margin: 0 }}>Fill this form to join</p>
          <p className='purplelight' style={{ marginBottom: 0 }}>
            Do you want this in your city?
          </p>
          <p style={{ margin: 0 }}>Fork this repo or</p>
          <p style={{ margin: 0 }}>Help us set it up</p>

          <div className='divider' style={{ marginLeft: 0 }}></div>

          <p>
            <span className='purplelight'>Fund by</span> organise all spheres of
            your cultural event and match you with the right people and fa
          </p>

          <p style={{ marginBottom: 0 }}>
            © <span className='purplelight'>Nabø Aarhus </span>| 2023
          </p>
          <p style={{ margin: 0 }}>
            Photo by <a href=''>somebody</a>
            <br /> Code by <a href=''>Aneta Camo</a>
          </p>
        </div>
      </section>
    </footer>
  );
}
