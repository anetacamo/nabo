import { useState, useEffect } from 'react';
import { SimpleLayout } from '../layouts/SimpleLayout/SimpleLayout';
import styles from './NewMember/NewMember.module.scss';
import axios from 'axios';
import Papa from 'papaparse';

const NewMember = () => {
  const [member, setMember] = useState({
    name: '',
    text: '',
    address: '',
    latitude: '',
    longitude: '',
    link: '',
    type: '',
    tags: '',
  });
  const [data, setData] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results: any) => {
          setData(results.data);
          setBlogs(
            results.data.filter((d: any, index) => index > 0 && d?.title)
          );
        },
      }
    );
  }, []);

  let allCategories: any[] = [];
  blogs.map((item: any) =>
    item.type
      .trim()
      .split(',')
      .map((cate: string) => cate != '' && allCategories.push(cate.trim()))
  );
  let categoriesOnce = [...new Set(allCategories)];

  let allTags: any[] = [];
  blogs.map((item: any) =>
    item.tags
      ?.split(',')
      .map((t: string) => t != '' && t != ' ' && allTags.push(t.trim()))
  );
  let tagsOnce = [...new Set(allTags)];

  //submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: member.name,
      text: member.text,
      address: member.address,
      latitude: member.latitude,
      longitude: member.longitude,
      link: member.link,
      type: member.type,
      tags: member.tags,
    };
    axios
      .post(
        'https://sheet.best/api/sheets/fcf501b9-9c62-4b8a-8188-900ed153fa38',
        data
      )
      .then((response) => {
        console.log(response);

        setMember({
          name: '',
          text: '',
          address: '',
          latitude: '',
          longitude: '',
          link: '',
          type: '',
          tags: '',
        });
      });
  };

  return (
    <SimpleLayout>
      <form className={styles.form} onSubmit={handleSubmit}>
        <br />
        <br /> <br />
        <h1>Add new member</h1>
        <p>
          Do you think you should be on the map? Fill in the form and we will
          get back to you or post you directly in our Aarhus guide
        </p>
        <div>
          <label htmlFor='name' className={styles.label}>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={member.name}
            onChange={(e) => setMember({ ...member, name: e.target.value })}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor='address' className={styles.label}>
            Address
          </label>
          <input
            type='text'
            name='address'
            id='address'
            value={member.address}
            onChange={(e) => setMember({ ...member, address: e.target.value })}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor='longitude' className={styles.label}>
            Longitude
          </label>
          <input
            type='text'
            name='longitude'
            id='longitude'
            value={member.longitude}
            onChange={(e) =>
              setMember({ ...member, longitude: e.target.value })
            }
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor='latitude' className={styles.label}>
            Latitude
          </label>
          <input
            type='text'
            name='latitude'
            id='latitude'
            value={member.latitude}
            onChange={(e) => setMember({ ...member, latitude: e.target.value })}
            className={styles.input}
          />
        </div>
        <p style={{ marginTop: 0, fontSize: 12 }}>
          to get longitude and longitude find yourself at any map app, right
          click and fill in the coordinates here. center of our map latitude:
          56.15738409999999, longitude:10.2007413
        </p>
        <div>
          <label htmlFor='type' className={styles.label}>
            Type
          </label>
          <select
            name='type'
            id='type'
            onChange={(e) => setMember({ ...member, type: e.target.value })}
            className={styles.input}
          >
            {categoriesOnce.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='tags' className={styles.label}>
            Visible Tags
          </label>
          <select
            name='tags'
            id='tags'
            onChange={(e) => setMember({ ...member, tags: e.target.value })}
            className={styles.input}
          >
            {tagsOnce.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor='link' className={styles.label}>
            website
          </label>
          <input
            type='text'
            name='link'
            id='link'
            value={member.link}
            onChange={(e) => setMember({ ...member, link: e.target.value })}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor='text' className={styles.label}>
            Description
          </label>
          <textarea
            id='text'
            name='text'
            value={member.text}
            onChange={(e) => setMember({ ...member, text: e.target.value })}
            className={styles.textArea}
          ></textarea>
        </div>
        <div>
          <label htmlFor='text' className={styles.label}>
            How can you use it?
          </label>
          <textarea
            id='text'
            name='text'
            value={member.text}
            onChange={(e) => setMember({ ...member, text: e.target.value })}
            className={styles.textArea}
          ></textarea>
        </div>
        <div>
          <button type='submit'>submit *</button>
        </div>
        <p style={{ fontSize: 12, marginTop: 0 }}>
          * note that by pressing above button, submited data will be reviewed
          and solely used for purpose of public display on this page. therefore
          be warned to not share any kind of sensitive information. Please
          inform us if you would like your data to be deleted or changed on this
          mail
        </p>
      </form>
    </SimpleLayout>
  );
};

export default NewMember;
