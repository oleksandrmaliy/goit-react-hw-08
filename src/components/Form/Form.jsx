import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

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
  const contacts = useSelector(getContacts);

  const handleOnSubmit = (values, actions) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      ) === undefined
    ) {
      const item = { id: nanoid(), name: values.name, number: values.number };
      dispatch(addContact(item));
      actions.resetForm();
    } else {
      alert(`${values.name} is already in contacts.`);
    }
  };

  return (
    <>
      <h2 className={css.title}>Phonebook</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={schema}
      >
        {formikProps => (
          <Form className={css.form}>
            <p>Name</p>
            <Field
              className={css.field}
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces."
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              value={formikProps.values.name}
            />
            <ErrorMessage name="name">{() => <p>Enter name</p>}</ErrorMessage>
            <p>Number</p>
            <Field
              className={css.field}
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
              onChange={formikProps.handleChange}
              onBlur={formikProps.handleBlur}
              value={formikProps.values.number}
            />
            <ErrorMessage name="number">
              {() => <p>Phone number must be 7 digits</p>}
            </ErrorMessage>
            <button className={css.button} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
