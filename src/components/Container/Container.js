import s from '../Container/Container.module.css';

export default function Container({ children }) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>{children}</div>
    </div>
  );
}
