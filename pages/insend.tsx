import { useState, useEffect } from 'react';
import styles from './NewMember/NewMember.module.scss';
import axios from 'axios';
import Papa from 'papaparse';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import FormItem from '../components/FormItem/FormItem';
import FormTag from '../components/FormTag/FormTag';
import FormSelect from '../components/FormSelect/FormSelect';
import FormArea from '../components/FormArea/FormArea';
import FormTypes from '../components/FormTypes/FormTypes';
import pagedata from '../texts/new-member.json';
import types from '../texts/types.json';

const NewMember = () => {
  const emptyMember = {
    name: '',
    address: '',
    link: '',
    latitude: '',
    longitude: '',
    type: '',
    tags: [],
    invisible: [],
    text: '',
    howtouse: '',
  };

  const [member, setMember] = useState(emptyMember);
  const [blogs, setBlogs] = useState([]);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv',
      {
        download: true,
        header: true,
        complete: (results: any) => {
          setBlogs(
            results.data.filter(
              (d: any, index: number) => index > 0 && d?.title
            )
          );
        },
      }
    );
  }, []);

  //submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = member;
    axios
      .post(
        'https://sheet.best/api/sheets/fcf501b9-9c62-4b8a-8188-900ed153fa38',
        data
      )
      .then((response) => {
        setMember(emptyMember);
        setFormSent(true);
      });
  };

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
    >
      <section>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>{pagedata.title}</h1>
          <p>{pagedata.description}</p>

          {pagedata.inputs.map((item) => (
            <FormItem
              name={item.name}
              label={item.label}
              helper={item.helper}
              value={member[item.name]}
              onFieldChange={(e) =>
                setMember({ ...member, [item.name]: e.target.value })
              }
            />
          ))}

          {pagedata.selects.map((item) => (
            <FormSelect
              tags={types}
              name={item.name}
              label={item.label}
              helper={item.helper}
              chosen={member.type}
              onFieldChange={(e) =>
                setMember({ ...member, [item.name]: e.target.value })
              }
            />
          ))}

          <FormTypes
            memberType={member.type}
            onMemberSet={(type: any) => setMember({ ...member, type: type })}
          />

          {pagedata.multiselects.map((item) => (
            <FormTag
              name={item.name}
              memberTags={member[item.name]}
              label={item.label}
              helper={item.helper}
              onSelectChange={(e: any) =>
                setMember({
                  ...member,
                  [item.name]: [...member[item.name], e.target.value],
                })
              }
              onCloseClick={(tag: string) =>
                setMember({
                  ...member,
                  [item.name]: member[item.name].filter((t) => tag !== t),
                })
              }
              blogs={blogs}
            />
          ))}

          {pagedata.textAreas.map((item) => (
            <FormArea
              name={item.name}
              label={item.label}
              value={member[item.name]}
              onFieldChange={(e) =>
                setMember({ ...member, [item.name]: e.target.value })
              }
            />
          ))}

          <div>
            <button type='submit' className={`${formSent && 'lightgreen'}`}>
              submit *
            </button>
          </div>
          {formSent && (
            <p className='lightgreen'>Succes! your form was submitted.</p>
          )}

          <p className={styles.helper}>{pagedata.helper}</p>
        </form>
      </section>
    </DefaultLayout>
  );
};

export default NewMember;
