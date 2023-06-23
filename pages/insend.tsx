import { useState, useEffect } from "react";

import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import FormArea from "../components/FormArea/FormArea";
import FormItem from "../components/FormItem/FormItem";
import FormSelect from "../components/FormSelect/FormSelect";
import FormTag from "../components/FormTag/FormTag";
import FormTypes from "../components/FormTypes/FormTypes";

import styles from "./NewMember/NewMember.module.scss";
import axios from "axios";
import Papa, { ParseResult } from "papaparse";
import pagedata from "../texts/new-member.json";
import CardType from "../types/card.type";
import FormUnit from "../types/form.type";

const NewMember = () => {
  const emptyMember = {
    title: "",
    address: "",
    link: "",
    latitude: "",
    longitude: "",
    type: "",
    tags: "",
    invisible: "",
    description: "",
    howtouse: "",
  };
  const [member, setMember] = useState<CardType>(emptyMember);
  const [blogs, setBlogs] = useState<CardType[]>([]);
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTEciZaKX8GYkcIPg1k9Qblp4MnPcUbjzAAniBNM3I1jUKvJJ8Jf2wcYGGtT7EtJFhRnPS6YY1mw8bO/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results: ParseResult<any>) => {
          setBlogs(
            results.data.filter(
              (d: CardType, index: number) => index > 0 && d?.title
            )
          );
        },
      }
    );
  }, []);

  //submit event
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = member;
    axios
      .post(
        "https://sheet.best/api/sheets/fcf501b9-9c62-4b8a-8188-900ed153fa38",
        data
      )
      .then((response) => {
        setMember({});
        setFormSent(true);
      });
  };

  console.log(member.invisible, member.tags);

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
    >
      <section>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>{pagedata.title}</h1>
          <p>{pagedata.description}</p>

          {pagedata.inputs.map((item: FormUnit, index: number) => (
            <FormItem
              key={index}
              name={item.name}
              label={item.label}
              helper={item.helper}
              value={member[item.name]}
              onFieldChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMember({ ...member, [item.name]: e.target.value })
              }
            />
          ))}

          {pagedata.selects.map((item: FormUnit, index: number) => (
            <FormSelect
              key={index}
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
            onMemberSet={(type) => setMember({ ...member, type: type })}
          />

          {pagedata.multiselects.map((item: FormUnit, index: number) => (
            <FormTag
              key={index}
              name={item.name}
              memberTags={member[item.name]}
              label={item.label}
              helper={item.helper}
              onSelectChange={(e) =>
                setMember({
                  ...member,
                  [item.name]: `${member[item.name]}, ${e.target.value}`,
                })
              }
              onCloseClick={(tag: string) =>
                setMember({
                  ...member,
                  [item.name]: `${member[item.name]
                    .split(",")
                    .filter((t: string) => tag !== t)}`,
                })
              }
              blogs={blogs}
            />
          ))}

          {pagedata.textAreas.map((item, index: number) => (
            <FormArea
              key={index}
              name={item.name}
              label={item.label}
              value={member[item.name]}
              onFieldChange={(e) =>
                setMember({ ...member, [item.name]: e.target.value })
              }
            />
          ))}

          <div>
            <button type="submit" className={`${formSent && "lightgreen"}`}>
              submit *
            </button>
          </div>
          {formSent && (
            <p className="lightgreen">Succes! your entry was submitted.</p>
          )}

          <p className={styles.helper}>{pagedata.helper}</p>
        </form>
      </section>
    </DefaultLayout>
  );
};

export default NewMember;
