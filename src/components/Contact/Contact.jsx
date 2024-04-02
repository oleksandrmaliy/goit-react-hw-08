import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  // console.log(contact);
  return (
    <li className={css.listItem}>
      <span>{name}: </span>
      <span>{number}</span>

      <button
        className={css.listButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
