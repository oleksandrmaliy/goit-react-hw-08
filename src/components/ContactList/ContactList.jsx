/* eslint-disable react/jsx-key */
// import { getContacts } from '../../redux/contactsSlice';
// import { getFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
// import { selectContactsItems } from '../../redux/contactsSlice';
// import { selectFilterName } from '../../redux/filtersSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice';

import css from './ContactList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  // const contacts = useSelector(selectContactsItems);
  // const filter = useSelector(selectFilterName);
  // console.log(contacts);
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
        filteredContacts.map(contact => (
          <Contact
            contact={contact}
            // name={contact.name}
            // number={contact.number}
            // id={contact.id}
            key={contact.id}
          />
        ))
      }
    </ul>
  );
};

export default ContactsList;
