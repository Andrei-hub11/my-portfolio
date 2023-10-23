import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { fieldsMessage } from "../../utils/formFields/fields";
import {
  BtnForm,
  ContactBox,
  ContactForm,
  ContactImage,
  ContactSection,
  ContactTitle,
  FormControl,
  FormInput,
  FormMsg,
  LabelForm,
  Textarea,
} from "./ContactUsStyle";

function ContactUs() {
  useEffect(() => emailjs.init("PLWT1-aym7fOAhPsx"), []);

  const initialValues = Object.fromEntries(
    fieldsMessage.map((field) => [field.name, field.initialValue || ""])
  );

  // Cria um objeto de validações usando a biblioteca 'yup' para definir regras de validação.
  const validations = yup.object().shape(
    Object.fromEntries(
      fieldsMessage.map((field) => [
        field.name,
        // Se houver uma função de validação personalizada no campo, ela será usada.
        field.validation || yup.string().required(`${field.label} is required`), // Define uma regra padrão que exige um valor não vazio.
      ])
    )
  );

  const onSubmit = async (values, actions) => {
    const { name, email, textarea } = values;

    emailjs.send(
      "service_x6ers2k",
      "template_q56bb4k",
      {
        name: "andrey",
        sender: name,
        sender_email: email,
        message: textarea,
      },
      "PLWT1-aym7fOAhPsx"
    );

    toast.success("Mensagem recebida. Responderei em breve 😉");
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: validations,
    onSubmit,
  });

  const titleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      transition: { duration: 1, delay: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const variants = {
    initial: { opacity: 0, y: -100 },
    hover: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      y: [-70, -50, -20, -10, -5, 0],
      transition: { duration: 1.5, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      y: [-10, -20, -50, -60, -80, -100],
      transition: { duration: 1 },
    },
  };

  return (
    <ContactSection id="Contato">
      <ContactTitle
        whileInView="animate"
        initial="initial"
        variants={titleVariants}
      >
        Contato
      </ContactTitle>
      <ContactBox whileInView="hover" initial="initial" variants={variants}>
        <ContactImage></ContactImage>
        <ContactForm onSubmit={handleSubmit}>
          {fieldsMessage.map((field) => {
            if (field.name !== "textarea") {
              return (
                <FormControl key={field.name}>
                  <FormInput
                    type={field.type || "text"}
                    value={values[field.name] || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=""
                    id={field.name}
                    $isError={
                      errors[field.name] && touched[field.name] ? true : false
                    }
                    autoComplete="off"
                    aria-autocomplete="none"
                  />
                  <LabelForm htmlFor="name">{field.label}</LabelForm>
                  <FormMsg>{errors[field.name]}</FormMsg>
                </FormControl>
              );
            }
          })}
          <FormControl>
            <Textarea
              cols="30"
              rows="10"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Conte-me sua mensagem"
              id={fieldsMessage[2].name}
              value={values["textarea"] || ""}
              $isError={
                errors["textarea"] && touched["textarea"] ? true : false
              }
            ></Textarea>
            <FormMsg>{errors["textarea"]}</FormMsg>
          </FormControl>
          <BtnForm
            primary={true.toString()}
            hasloading={false.toString()}
            disabled={isSubmitting}
            type="submit"
          >
            Enviar
          </BtnForm>
        </ContactForm>
      </ContactBox>
    </ContactSection>
  );
}

export default ContactUs;
