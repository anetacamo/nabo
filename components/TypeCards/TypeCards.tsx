import Image from 'next/image';
import styles from './TypeCards.module.scss';
import { types } from '../../types/types.type';

export default function TypeCards() {
  return (
    <div className='flex-center' style={{ alignItems: 'unset', margin: -8 }}>
      {types.map((type: any, index: number) => (
        <div className={`${styles.card} bg-${type.color}`} key={index}>
          <div className={styles.image}>
            <Image
              src={`/categories/${type.color}.png`}
              alt='blue'
              layout='fill'
              quality='7'
              objectFit='cover'
            />
          </div>
          {type?.name && <h4 className={styles.special}>{type?.name}</h4>}
          {type?.about && <h5 style={{ marginTop: 12 }}>{type?.about}</h5>}
        </div>
      ))}
    </div>
  );
}
