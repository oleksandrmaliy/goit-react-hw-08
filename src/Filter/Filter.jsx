import css from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={css.filter}>
      <label htmlFor="filter">
        Find contacts by name <br />
        <input
          autoComplete="off"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Filter;
