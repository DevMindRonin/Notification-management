import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { NotificationFormProps } from "../types/types";
import CategorySelect from "../components/CategorySelect";
import FormFields from "../components/FormFields";

const FormPage = ({ addNotification }: NotificationFormProps) => {
  const navigate = useNavigate();
  const { entityType, entityName } = useLocation().state || {};
  const [categoryOption, setCategoryOption] = useState<string>(
    entityName || ""
  );
  const [whistlerName, setWhistlerName] = useState<string>("");
  const [whistlerAge, setWhistlerAge] = useState<number | "">("");
  const [whistlerFile, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whistlerName || !whistlerAge) {
      alert("Vyplňte všechna pole formuláře.");
      return;
    }
    addNotification({
      entityType: entityType || "",
      entityName: categoryOption,
      whistlerName,
      whistlerAge: Number(whistlerAge),
      whistlerFile,
    });
    navigate("/finalpage");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CategorySelect
        categoryOption={categoryOption}
        setCategoryOption={setCategoryOption}
      />
      <FormFields
        whistlerName={whistlerName}
        setWhistlerName={setWhistlerName}
        whistlerAge={whistlerAge}
        setWhistlerAge={setWhistlerAge}
        handleFileChange={handleFileChange}
      />

      <div>
        Seznamte se s informacemi o tom,{" "}
        <a href="https://www.app.nntb.cz/cs/information-on-personal-data-processing-school">
          jak zpracováváme osobní údaje.
        </a>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <Button type="submit" variant="primary" className="mt-3">
          Odeslat
        </Button>
      </div>
    </Form>
  );
};

export default FormPage;
