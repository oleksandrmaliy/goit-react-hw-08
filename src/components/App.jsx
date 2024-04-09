import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import Layout from './Layout/Layout';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

// import Contacts from '../pages/Contacts';

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
      {/* <Layout> */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tasks" element={<TasksPage />} /> */}
        </Routes>
      </Suspense>
      <Toaster />

      {/* </Layout> */}
    </>
  );
};

export default App;
