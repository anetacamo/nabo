import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import FormArea from "../components/FormArea/FormArea";
import FormItem from "../components/FormItem/FormItem";
import FormSelect from "../components/FormSelect/FormSelect";
import FormTag from "../components/FormTag/FormTag";
import FormTypes from "../components/FormTypes/FormTypes";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import pagedata from "../texts/new-member.json";
import CardType, {
  emptyMember,
  TextAreas,
  MultiSelects,
  Inputs,
  Select,
} from "../types/card.type";

import styles from "./NewMember/NewMember.module.scss";
import { fetchGoogleSheetData } from "../hooks/data";

export async function getStaticProps() {
  const blogs = await fetchGoogleSheetData();

  return {
    props: {
      blogs,
    },
  };
}

interface NewMemberProps {
  blogs: CardType[]; // Assuming you have a Blog type defined
  member: CardType;
  formSent: boolean;
  spam: string;
  formReady: boolean;
}

const NewMember = ({ blogs }: NewMemberProps) => {
  const [member, setMember] = useState(emptyMember);
  const [formSent, setFormSent] = useState(false);
  const [spam, setSpam] = useState("");
  const [formReady, setFormReady] = useState(false);

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

  return (
    <DefaultLayout
      title={pagedata.title}
      description={pagedata.meta ?? pagedata.description}
    >
      <section>
        <form
          className={styles.form}
          method="POST"
          action={process.env.NEXT_PUBLIC_SUBMIT_FORM}
        >
          <h1>{pagedata.title}</h1>
          <p>{pagedata.description}</p>

          {pagedata.inputs.map((item, index: number) => (
            <FormItem
              key={index}
              name={item.name as Inputs}
              required={item.required}
              label={item.label}
              helper={item.helper}
              value={member[item.name as Inputs] || ""}
              onFieldChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMember({ ...member, [item.name as Inputs]: e.target.value })
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

          {pagedata.selects.map((item, index: number) => (
            <FormSelect
              key={index}
              name={item.name as Select}
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

          {pagedata.multiselects.map((item, index: number) => (
            <FormTag
              key={index}
              name={item.name as MultiSelects}
              required={item.required}
              memberTags={member[item.name as MultiSelects]}
              label={item.label}
              helper={item.helper}
              onValueUpdate={(membertags) =>
                setMember({
                  ...member,
                  [item.name]: `${
                    member[item.name as MultiSelects]
                  }, ${membertags}`,
                })
              }
              onCloseClick={(tag: string) =>
                setMember({
                  ...member,
                  [item.name]: `${member[item.name as MultiSelects]
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
              name={item.name as TextAreas}
              required={item.required}
              label={item.label}
              value={member[item.name as TextAreas] || ""}
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
                <FontAwesomeIcon
                  icon={formReady ? faCheck : faClose}
                  className={styles.icon}
                />
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
