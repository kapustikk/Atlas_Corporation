import React, { Component } from 'react';
import Modal from './Modal';
import Checkbox from './Checkbox';
import TextField from '@material-ui/core/TextField';
import 'react-toastify/dist/ReactToastify.css';
import s from '../AboutUs/AboutUs.module.css';
import askUsImg from '../images/help.svg';

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
            <p className={s.mainTitleAsks}>Have a question? Ask us</p>
            <button
              type="button"
              aria-label="Learn more about us"
              className={s.button}
              onClick={this.toggleModal}
            >
              Ask us
            </button>
          </div>
          <h2 className={s.letter}>A</h2>
        </div>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className={s.modal}>
              <form className={s.formModal}>
                <div className={s.modalInfo}>
                  <h3 className={s.feedback}>Feedback</h3>
                  <h2 className={s.advice}>Need an advice?</h2>
                  <h4 className={s.sendMessage}>
                    Send us a message an our manager will call you soon
                  </h4>
                  <form className={s.inputArea}>
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
                  </form>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
