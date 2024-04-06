import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';
import {
  selectContactsLoading,
  selectContactsError,
} from './redux/contacts/slice';

import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <p>... Loading</p>}
      {error && <p>{error}</p>}
      <ContactsList />
    </>
  );
};

export default App;
