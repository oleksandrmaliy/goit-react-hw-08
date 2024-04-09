// import { useEffect } from 'react';
// import {
// useDispatch,
// useSelector
// } from 'react-redux';
// import { fetchContacts } from '../redux/contacts/operations';
// import {
//   selectContactsLoading,
//   selectContactsError,
// } from '../redux/contacts/selectors';

import Contacts from '../pages/Contacts';

// import ContactForm from './ContactForm/ContactForm';
// import ContactsList from './ContactList/ContactList';
// import SearchBox from './SearchBox/SearchBox';
import './App.css';

const App = () => {
  // const dispatch = useDispatch();
  // const loading = useSelector(selectContactsLoading);
  // const error = useSelector(selectContactsError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Contacts />
      {/* <SearchBox />
      {loading && <p>... Loading</p>}
      {error && <p>{error}</p>}
      <ContactsList /> */}
    </>
  );
};

export default App;
