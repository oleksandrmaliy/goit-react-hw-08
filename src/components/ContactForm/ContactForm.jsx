import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { selectContactsItems } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(1000000).max(9999999).integer().required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);

  const handleOnSubmit = (values, actions) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    const item = { name: values.name, number: values.number };
    dispatch(addContact(item));
    actions.resetForm();
  };

  return (
    <>
      <h2 className={css.title}>Phonebook</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <p>Name</p>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage name="name">{() => <p>Enter name</p>}</ErrorMessage>
          <p>Number</p>
          <Field className={css.field} type="tel" name="number" />
          <ErrorMessage name="number">
            {() => <p>Phone number must be 7 digits</p>}
          </ErrorMessage>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
