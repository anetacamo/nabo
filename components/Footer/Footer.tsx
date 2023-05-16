import styles from './Footer.module.scss';
import IconHolder from '../IconHolder/IconHolder';
import { menuItems } from '../../types/menu.type';

export default function Footer() {
  return (
    <footer className='bg-black'>
      <section className={styles.footer}>
        <div className={styles.column}>
          <h3>About Nabø</h3>
          <p>
            <span className='purplelight'>Nabø </span>is an interactive guide to
            help you organise all spheres of your cultural event and match you
            with the right people and facilities you might havent even know
            existed
          </p>

          {menuItems.map((item) => (
            <IconHolder name={item.name} link={item.link} />
          ))}
          <div className='divider' style={{ marginLeft: 0 }}></div>

          <h3>REQUEST TAKEDOWN / EDIT</h3>
          <p>
            If this map contains information about your project that you would
            like changed or removed, please contact us.
          </p>
          <IconHolder name='Liam@ftontloberne.com' />
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
          <IconHolder name='Nabo Trømso' />
          <IconHolder name='Nabo Aarhus' />
          <IconHolder name='Nabo Skandeborg' />

          <div className='divider' style={{ marginLeft: 0 }}></div>
        </div>
        <div className={styles.column}>
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
            <span className='purplelight'>Made possible by</span> ERASMUS+ and
            the European Union
          </p>
          <p style={{ margin: 0 }}>logo</p>

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
