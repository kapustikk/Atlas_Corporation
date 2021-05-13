// import Navigation from '../Navigation/Navigation';
import Statefull from '../Navigation/Statefull';
import s from '../AppBar/AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.header}>
      <Statefull />
    </header>
  );
}
