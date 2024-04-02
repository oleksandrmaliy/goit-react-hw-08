/* eslint-disable react/jsx-key */
// import { getContacts } from '../../redux/contactsSlice';
// import { getFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.name);
  console.log(contacts);
  return (
    <ul className={css.list}>
      {/* {filter.length > 0
        ? contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
        : 
        contacts.map(contact => (
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              key={contact.id}
            />
          ))} */}
      {
        //    filter.length > 0
        // ? contacts.filter(contact =>
        //     contact.name.toLowerCase().includes(filter.toLowerCase())
        //   )
        // :
        contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              key={contact.id}
            />
          ))
      }
    </ul>
  );
};

export default ContactsList;
