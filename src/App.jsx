import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </>
  );
};

export default App;
