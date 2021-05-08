import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { toast } from 'react-toastify';
import s from '../AboutUs/AboutUs.module.css';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (this.query.trim() !== '') {
      toast('Thank you!');
      return;
    }
  };

  return (
    <div className={s.checkboxDiv}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        type="checkbox"
        name="checkbox"
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={s.checkbox}
      />
      <span className={s.agreement}>
        I agree with
        <a
          href="http://atlascorporation-llc.com/privacy-policy.pdf"
          target="_blank"
          rel="noreferrer"
          className={s.cookies}
        >
          privacy policy
        </a>
        and{' '}
        <a
          href="http://atlascorporation-llc.com/cookies.pdf"
          target="_blank"
          rel="noreferrer"
          className={s.cookies}
        >
          cookies
        </a>
      </span>
      <button type="submit" className={s.sendBtn} onSubmit={handleSubmit}>
        Send
      </button>
    </div>
  );
}
