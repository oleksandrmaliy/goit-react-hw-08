import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './Form.module.css';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(1000000).max(9999999).integer().required(),
});

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const contact = {
      id: nanoid(5),
      name: name,
      number: number,
    };
    this.props.addContact(contact);

    resetForm();
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={this.state}
          onSubmit={this.handleSubmit}
          validationSchema={schema}
        >
          <Form className={css.form} autoComplete="off">
            <div className={css.label}>
              <label htmlFor="name">
                Name <br />
                <Field className={css.field} type="text" name="name" required />
                <br />
                <ErrorMessage name="name" />
              </label>
            </div>
            <div className={css.label}>
              <label htmlFor="number">
                Phone <br />
                <Field
                  className={css.field}
                  type="tel"
                  name="number"
                  required
                />
                <br />
                <ErrorMessage name="number" />
              </label>
            </div>
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default ContactForm;
