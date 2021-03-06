import React, { Component } from 'react';
import { Trans } from 'react-i18next';
import Modal from './Modal';
// import Checkbox from './Checkbox';
// import TextField from '@material-ui/core/TextField';
import 'react-toastify/dist/ReactToastify.css';
import s from '../AboutUs/AboutUs.module.css';
import askUsImg from '../images/help.png';
import mail from '../images/mail.svg';

export default class AskUs extends Component {
  state = {
    showModal: false,
    // checked: false,
    query: '',
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  handleChange = () => {
    this.setState(state => ({
      checked: !state.checked,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className={s.askUsDiv}>
        <div className={s.askUs}>
          <div className={s.divForImg}>
            <img src={askUsImg} alt="" className={s.askUsSvg} />
          </div>
          <div className={s.textBlock}>
            <p className={s.mainTitleAsks}>
              <Trans i18nKey="askUs__text">Have a question? Ask us</Trans>
            </p>
            <button
              type="button"
              aria-label="Learn more about us"
              className={s.button}
              onClick={this.toggleModal}
            >
              <Trans i18nKey="askUs__button">Ask us</Trans>
            </button>
          </div>
          {/* <h2 className={s.letter}>A</h2> */}
        </div>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className={s.modal}>
              <form className={s.formModal}>
                <div className={s.modalInfo}>
                  {/* <h3 className={s.feedback}>Feedback</h3> */}
                  <h2 className={s.advice}>
                    <Trans i18nKey="advice">Need an advice?</Trans>
                  </h2>
                  <h4 className={s.sendMessage}>
                    <Trans i18nKey="contactUs__text">Contact us</Trans>
                  </h4>
                  <p>
                    <a
                      href="mailto:office@atlascorporation-llc.com"
                      className={s.contactUsMail}
                    >
                      <img src={mail} alt="" className={s.mailSvg} />
                      office@atlascorporation-llc.com
                    </a>
                  </p>
                  {/* <form className={s.inputArea}>
                    <TextField
                      id="standard-basic"
                      className={s.textfield}
                      label="Name"
                      type="text"
                    />
                    <TextField
                      id="standard-basic"
                      className={s.textfield}
                      label="Surname"
                      type="text"
                    />
                    <TextField
                      id="standard-basic"
                      className={s.textfield}
                      label="Email"
                      type="email"
                    />
                    <TextField
                      id="standard-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                    />

                    <Checkbox />
                  </form> */}
                </div>
              </form>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
