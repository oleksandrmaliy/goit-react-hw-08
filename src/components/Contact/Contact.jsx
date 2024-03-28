import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import css from './Contact.module.css';

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem} key={item.id}>
      <span>{item.name}: </span>
      <span>{item.number}</span>

      <button
        className={css.listButton}
        onClick={() => dispatch(deleteContact(item.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
