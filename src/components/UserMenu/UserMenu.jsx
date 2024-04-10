import // useDispatch,
// useSelector,
'react-redux';
// import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
// import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, user.name
        {/* {user.name} */}
      </p>
      <button
        type="button"
        // onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}
