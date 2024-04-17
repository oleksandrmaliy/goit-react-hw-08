import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import PageTitle from '../components/PageTitle/PageTitle';
import { selectAuthLoading, selectAuthError } from '../redux/auth/selectors';

export default function Login() {
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      {loading && <p>... Loading</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
