import css from './Title.module.css';

function TitleDiv({ title }) {
  return <div>{title && <h2 className={css.title}>{title}</h2>}</div>;
}

export default TitleDiv;
