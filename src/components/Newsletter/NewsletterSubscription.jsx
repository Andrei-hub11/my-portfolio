import { useFormik } from "formik";
import * as yup from "yup";

import {
  BtnSubscription,
  InputSubscription,
  Subscription,
  SubscriptionBox,
  SubscriptionBoxSecondary,
  SubscriptionBoxSecondaryInfo,
  SubscriptionControl,
  SubscriptionForm,
  SubscriptionFormMsg,
  SubscriptionHeading,
  SubscriptionText,
  SubscriptionTitle,
} from "./NewsletterSubscriptionStyle";

import { fieldsNewsletter } from "../../utils/formFields/fields";

function NewsletterSubscription() {
  const initialValues = Object.fromEntries(
    fieldsNewsletter.map((field) => [field.name, field.initialValue || ""])
  );

  // Cria um objeto de validações usando a biblioteca 'yup' para definir regras de validação.
  const validations = yup.object().shape(
    Object.fromEntries(
      fieldsNewsletter.map((field) => [
        field.name,
        // Se houver uma função de validação personalizada no campo, ela será usada.
        field.validation || yup.string().required(`${field.label} is required`), // Define uma regra padrão que exige um valor não vazio.
      ])
    )
  );

  const onSubmit = async (values, actions) => {
    actions.resetForm();
  };

  const variants = {
    initial: { opacity: 0 },
    hover: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      transition: { duration: 1.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 },
    },
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
  return (
    <Subscription whileInView="hover" initial="initial" variants={variants}>
      <SubscriptionBox>
        <SubscriptionBoxSecondary>
          <SubscriptionBoxSecondaryInfo>
            <SubscriptionTitle>Newsletter</SubscriptionTitle>
            <SubscriptionHeading>
              Receba novidades sobre meus projetos
            </SubscriptionHeading>

            <SubscriptionText>
              Fique por dentro das últimas atualizações e novos projetos que
              estou desenvolvendo. Inscreva-se para receber informações
              exclusivas diretamente na sua caixa de entrada.
            </SubscriptionText>
          </SubscriptionBoxSecondaryInfo>
          <SubscriptionForm onSubmit={handleSubmit}>
            {fieldsNewsletter.map((field) => (
              <SubscriptionControl key={field.name}>
                <InputSubscription
                  type={field.type || "text"}
                  value={values[field.name] || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Diga-me seu e-mail"
                  id={field.name}
                  $isError={
                    errors[field.name] && touched[field.name] ? true : false
                  }
                  autoComplete="off"
                  aria-autocomplete="none"
                />

                <SubscriptionFormMsg>{errors[field.name]}</SubscriptionFormMsg>
              </SubscriptionControl>
            ))}

            <BtnSubscription disabled={isSubmitting}>
              Inscrever-se
            </BtnSubscription>
          </SubscriptionForm>
        </SubscriptionBoxSecondary>
      </SubscriptionBox>
    </Subscription>
  );
}

export default NewsletterSubscription;
