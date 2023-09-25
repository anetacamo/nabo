import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Papa, { ParseResult } from "papaparse";
import { useEffect, useMemo, useState } from "react";
import FormArea from "../components/FormArea/FormArea";
import FormItem from "../components/FormItem/FormItem";
import FormSelect from "../components/FormSelect/FormSelect";
import FormTag from "../components/FormTag/FormTag";
import FormTypes from "../components/FormTypes/FormTypes";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import pagedata from "../texts/new-member.json";
import CardType, { emptyMember, Multiselects } from "../types/card.type";
import FormUnit from "../types/form.type";
import styles from "./NewMember/NewMember.module.scss";

const NewMember = () => {
  const [member, setMember] = useState<CardType>(emptyMember);
  const [blogs, setBlogs] = useState<CardType[]>([]);
  const [formSent, setFormSent] = useState(false);
  const [spam, setSpam] = useState("");
  const [formReady, setFormReady] = useState(false);

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

  useMemo(() => {
    if (
      member.title !== "" &&
      member.description !== "" &&
      member.type !== ""
    ) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }, [member.title, member.description, member.type]);

  // //submit event
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   // const formEle = document.querySelector("form");
  //   // const formDatab = new FormData(formEle);
  //   console.log("submit click");
  //   console.log(member);
  //   console.log(JSON.stringify(member));
  //   event.preventDefault();
  //   if (spam !== "") {
  //     console.log("spam here");
  //   } else {
  //     fetch(
  //       process.env.REACT_APP_SUBMIT_FORM,
  //       {
  //         method: "POST",
  //         mode: "no-cors",
  //         body: JSON.stringify(member),
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     // axios
  //     //   .post(
  //     //     "https://sheet.best/api/sheets/fcf501b9-9c62-4b8a-8188-900ed153fa38",
  //     //     member
  //     //   )
  //     //   .then((response) => {
  //     console.log(member);
  //     setFormSent(true);
  //   }

  //   setSpam("");
  //   setMember(emptyMember);
  //   //});
  //};

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
    >
      <section>
        <form
          className={styles.form}
          method="POST"
          action="https://script.google.com/macros/s/AKfycbynyz2uTNn1k4arMg74RHPYguQB2G3LGHdxht9rTsBGKwyWAWaGdSK2ysx-xgh8BQFp/exec"
        >
          <h1>{pagedata.title}</h1>
          <p>{pagedata.description}</p>

          {pagedata.inputs.map((item: FormUnit, index: number) => (
            <FormItem
              key={index}
              name={item.name}
              required={item.required}
              label={item.label}
              helper={item.helper}
              value={member[item.name as keyof CardType] || ""}
              onFieldChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMember({ ...member, [item.name]: e.target.value })
              }
            />
          ))}

          <FormItem
            name="email"
            value={spam}
            error={spam != ""}
            success={spam === ""}
            onFieldChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSpam(e.target.value)
            }
          />

          {pagedata.selects.map((item: FormUnit, index: number) => (
            <FormSelect
              key={index}
              name={item.name}
              required={item.required}
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
              required={item.required}
              memberTags={member[item.name as keyof Multiselects]}
              label={item.label}
              helper={item.helper}
              onSelectChange={(e) =>
                setMember({
                  ...member,
                  [item.name]: `${member[item.name as keyof CardType]}, ${e}`,
                })
              }
              onCloseClick={(tag: string) =>
                setMember({
                  ...member,
                  [item.name]: `${member[item.name as keyof Multiselects]
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
              required={item.required}
              label={item.label}
              value={member[item.name as keyof CardType] || ""}
              onFieldChange={(e) =>
                setMember({ ...member, [item.name]: e.target.value })
              }
            />
          ))}

          <div>
            <button
              type="submit"
              disabled={!formReady}
              className={`${styles.submit} ${formSent && "greenlight"} ${
                formReady ? "button-greenlight" : "button-green"
              }`}
            >
              <span className="flex-center-hor">
                {formReady ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.icon}
                    style={{ marginLeft: -12, marginRight: 16 }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faClose}
                    className={styles.icon}
                    style={{ marginLeft: -12, marginRight: 16 }}
                  />
                )}
                {pagedata.submit_button}
              </span>
            </button>
          </div>

          <div style={{ marginTop: "-1rem" }}>
            {!formReady && (
              <div className="green flex-center-hor">
                <FontAwesomeIcon icon={faClose} className={styles.icon} />
                <p>{pagedata.required_fields_message}</p>
              </div>
            )}
            {formSent && (
              <div className="green flex-center-hor">
                <FontAwesomeIcon icon={faCheck} className={styles.icon} />
                <p>{pagedata.form_submitted_message}</p>
              </div>
            )}
            <p className={styles.helper}>{pagedata.helper}</p>
          </div>
        </form>
      </section>
    </DefaultLayout>
  );
};

export default NewMember;
