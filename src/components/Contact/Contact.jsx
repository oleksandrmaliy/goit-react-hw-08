import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem}>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button
        className={css.listButton}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
