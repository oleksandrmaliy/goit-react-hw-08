import { useSelector } from 'react-redux';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import PageTitle from '../components/PageTitle/PageTitle';
import { selectAuthLoading, selectAuthError } from '../redux/auth/selectors';

export default function Register() {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegisterForm />
      {loading && <p>... Loading</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
