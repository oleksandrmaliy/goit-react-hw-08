import Form from './components/Form/Form';
import ContactsList from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import './App.css';

const App = () => {
  return (
    <>
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
};

export default App;
