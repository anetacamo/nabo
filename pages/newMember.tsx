import { useState } from "react";
import { SimpleLayout } from "../layouts/SimpleLayout/SimpleLayout";
import styles from "./NewMember/NewMember.module.scss";

const NewMember = () => {
  const [member, setMember] = useState({
    name: "",
    address: "",
    opening: "",
    text: "",
  });
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <SimpleLayout>
      <form className={styles.form}>
        <h1>Add new member</h1>
        <p>
          South Harbour is an area in Aarhus west. To see the exact date and all
          sorts of upcoming activities, check the facebook site of
        </p>
        <div>
          <label htmlFor="member" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            name="member"
            id="member"
            value={member.name}
            onChange={(e) => setMember({ ...member, name: e.target.value })}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="address" className={styles.label}>
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="address" className={styles.label}>
            Type
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="address" className={styles.label}>
            Tags
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="address" className={styles.label}>
            Link
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="address" className={styles.label}>
            Short Text
          </label>
          <textarea id="story" name="story"></textarea>
        </div>
        <div>
          <label htmlFor="address" className={styles.label}>
            Text
          </label>
          <textarea id="story" name="story"></textarea>
        </div>
      </form>
    </SimpleLayout>
  );
};

export default NewMember;
