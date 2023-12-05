import * as yup from "yup";
import { useFormik } from "formik";

import Button from "../Button/Button";
import { Form, Label, ErrorText } from "./ContactForm.styled";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s]+$/)
    .required("Required"),
  email: yup.string().email().required("Required"),
  phone: yup
    .string()
    .matches(/^\d{12}$/)
    .required("Required"),
  message: yup.string(),
});

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  actions.resetForm();
  alert(JSON.stringify(values, null, 2));
};

const ContactForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },

      validationSchema: schema,
      onSubmit,
    });

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        * Full name:
        <input
          type="text"
          name="name"
          id="name"
          required
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="John Rosie"
          className={errors.name && touched.name ? "error" : ""}
        />
        <ErrorText className={errors.name && touched.name ? "error" : ""}>
          Wrong Fullname
        </ErrorText>
      </Label>

      <Label>
        * E-mail:
        <input
          type="email"
          name="email"
          id="email"
          required
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="johnrosie@gmail.com"
          className={errors.email && touched.email ? "error" : ""}
        />
        <ErrorText className={errors.email && touched.email ? "error" : ""}>
          Wrong Email
        </ErrorText>
      </Label>

      <Label>
        * Phone:
        <input
          type="phone"
          name="phone"
          id="phone"
          required
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="380961234567"
          className={errors.phone && touched.phone ? "error" : ""}
        />
        <ErrorText className={errors.phone && touched.phone ? "error" : ""}>
          Wrong Phone
        </ErrorText>
      </Label>

      <Label>
        Message:
        <textarea
          name="message"
          id="message"
          value={values.message}
          onChange={handleChange}
          cols="30"
          rows="10"
          placeholder="Your message"
        ></textarea>
      </Label>
      <Button type="submit" text="Send" />
    </Form>
  );
};

export default ContactForm;
