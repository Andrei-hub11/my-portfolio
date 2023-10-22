import * as yup from "yup";

export const fieldsMessage = [
  {
    name: "name",
    label: "Nome",
    validation: yup
      .string()
      .min(2, "Informe um nome válido")
      .required("O nome é requerido"),
  },
  {
    name: "email",
    label: "Adicione um email",
    validation: yup
      .string()
      .email("Digite um email válido")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "O email deve seguir o formato padrão de endereços de email"
      )
      .required("O email é obrigatório"),
  },
  {
    name: "textarea",
    label: "Adcione um email",
    validation: yup
      .string()
      .min(10, "Informe uma mensagem com no minimo 10 caracteres")
      .required("Diga uma mensagem válida"),
  },
];

export const fieldsNewsletter = [
  {
    name: "email",
    label: "Adicione um email",
    validation: yup
      .string()
      .email("Digite um email válido")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "O email deve seguir o formato padrão de endereços de email"
      )
      .required("O email é obrigatório"),
  },
];
