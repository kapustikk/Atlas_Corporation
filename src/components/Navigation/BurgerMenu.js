import DropdownForBurger from './Dropdown/DropdownForBurger';
import s from './Navigation.module.css';

export default function BurgerMenu() {
  return (
    <div className={s.burgerMenu}>
      <DropdownForBurger />
    </div>
  );
}
