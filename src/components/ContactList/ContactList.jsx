import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactsList = () => {
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
        <Contact item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ContactsList;
