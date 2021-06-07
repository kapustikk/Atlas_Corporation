import React, { Component } from 'react';
// import {Client} from "@googlemaps/google-maps-services-js";
// import axiosInstance from 'axios';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Trans } from 'react-i18next';
import api from '../api';
import s from '../AboutUs/AboutUs.module.css';
import three from '../images/03.svg';
import thirtyfour from '../images/34.svg';

export class Maps extends Component {
  render() {
    // const client = new Client({});

    // client
    //   .elevation({
    //     params: {
    //       locations: [{ lat: 45, lng: -110 }],
    //       key: process.env.GOOGLE_MAPS_API_KEY,
    //     },
    //     timeout: 1000, // milliseconds
    //   }, axiosInstance)
    //   .then((r) => {
    //     console.log(r.data.results[0].elevation);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    return (
      <div className={s.mapDiv}>
        <div className={s.mapText}>
          <span>
            {/* <h4 className={s.ourWorkText}>Our work</h4> */}
            <h2 className={s.mapMainText}>
              <Trans i18nKey="map__title">We work all over the world</Trans>
            </h2>
          </span>
          <span>
            <p className={s.ourWorkDescription}>
              <img src={three} alt="" className={s.amountOurWork} />
              <Trans i18nKey="numberOfOffices">Central offices</Trans>
            </p>
            <p className={s.ourWorkDescription}>
              <img src={thirtyfour} alt="" className={s.amountOurWork} />
              <Trans i18nKey="numberOfCountries">
                Countries in which we have gained practical experience and every
                year their number is growing
              </Trans>
            </p>
          </span>
        </div>

        <div className={s.map}>
          <Map
            google={this.props.google}
            zoom={15}
            className={s.myMap}
            initialCenter={{ lat: 9.761927, lng: 79.95244 }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api,
})(Maps);
