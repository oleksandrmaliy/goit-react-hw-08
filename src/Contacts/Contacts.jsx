import { getContacts } from '../redux/contactsSlice';
import { getFilter } from '../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';

import css from './Contacts.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ul className={css.list}>
      {(filter.length > 0
        ? contacts.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
        : contacts
      ).map(item => (
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
      ))}
    </ul>
  );
};

export default ContactsList;
