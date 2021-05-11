import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import api from '../api';
import AskUs from '../AboutUs/AskUs';
import s from './Contacts.module.css';
import mail from '../images/mail.svg';

export class Contacts extends Component {
  render() {
    return (
      <div className={s.contactsDiv}>
        <div className={s.contacts}>
          <div className={s.map}>
            <Map
              google={this.props.google}
              zoom={15}
              className={s.myMap}
              initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            />
          </div>
          <div className={s.adresses}>
            <h4 className={s.titleOne}>Find us</h4>
            <h1 className={s.titleTwo}>Contacts</h1>
            <address className={s.adress}>
              <ul className={s.listOfAdresses}>
                <li className={s.itemOfAdresses}>
                  <p className={s.telephone}>
                    Ukraine :{' '}
                    <a href="tel:380952811515" className={s.tel}>
                      38 0952811515
                    </a>
                  </p>
                  <p className={s.telephone}>
                    International :{' '}
                    <a href="tel:393499344027" className={s.tel}>
                      39 3499344027
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:office@atlascorporation-llc.com"
                      className={s.mail}
                    >
                      <img src={mail} alt="" className={s.mailSvg} />
                      office@atlascorporation-llc.com
                    </a>
                  </p>
                </li>
                <li className={s.itemOfAdresses}>
                  <p className={s.telephone}>
                    Warsaw :{' '}
                    <a href="tel:48787862472" className={s.tel}>
                      48 787862472
                    </a>
                  </p>
                  <p className={s.telephone}>
                    International :{' '}
                    <a href="tel:393315725689" className={s.tel}>
                      39 3315725689
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@atlaspolska-spzoo.pl"
                      className={s.mail}
                    >
                      <img src={mail} alt="" className={s.mailSvg} />
                      info@atlaspolska-spzoo.pl
                    </a>
                  </p>
                </li>
                <li className={s.itemOfAdresses}>
                  <p className={s.telephone}>
                    Italy :{' '}
                    <a href="tel:393387685160" className={s.tel}>
                      39 3387685160
                    </a>
                  </p>
                  <p className={s.telephone}>
                    International :{' '}
                    <a href="tel:393315725689" className={s.tel}>
                      39 3315725689
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@italtechnology-srl.it"
                      className={s.mail}
                    >
                      <img src={mail} alt="" className={s.mailSvg} />
                      info@italtechnology-srl.it
                    </a>
                  </p>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <AskUs />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api,
})(Contacts);
