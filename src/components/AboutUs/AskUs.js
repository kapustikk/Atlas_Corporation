import React, { Component } from 'react';
import Modal from './Modal';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../AboutUs/AboutUs.module.css';
import askUsImg from '../images/help.svg';

export default class AskUs extends Component {
  state = {
    showModal: false,
    checked: false,
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

  handleSubmit = e => {
    e.preventDefault();

    if (this.query.trim() !== '') {
      toast('Thank you!');
      return;
    }
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
                  <div className={s.inputArea}>
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
                      id="standard-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                    />
                    <div className={s.checkboxDiv}>
                      <Checkbox
                        checked={this.checked}
                        onChange={this.handleChange}
                        color="primary"
                        type="checkbox"
                        name="checkbox"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        className={s.checkbox}
                      />
                      <span className={s.agreement}>
                        I agree with
                        <a href="" className={s.cookies}>
                          privacy policy
                        </a>
                        and{' '}
                        <a href="" className={s.cookies}>
                          cookies
                        </a>
                      </span>
                      <button
                        type="submit"
                        className={s.sendBtn}
                        onSubmit={this.handleSubmit}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
