import React, { Component } from 'react';
import { Trans } from 'react-i18next';
// import { MapAjax } from '@syncfusion/ej2-maps';
// import {
//     MapsComponent, Inject, ILoadedEventArgs, MapsTheme, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Legend, Zoom, MapsTooltip
// } from '@syncfusion/ej2-react-maps';
// import { Browser } from '@syncfusion/ej2-base';
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  MapsTooltip,
  MarkersDirective,
  MarkerDirective,
  Marker,
  Zoom,
  Inject,
} from '@syncfusion/ej2-react-maps';
import { Legend, DataLabel } from '@syncfusion/ej2-maps';
import world_map from './world-map.json';
// import myMap from './map';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import api from '../api';
import AskUs from '../AboutUs/AskUs';
import s from './Contacts.module.css';
import mail from '../images/mail.svg';

export default class Contacts extends Component {
  render() {
    return (
      <div className={s.contactsDiv}>
        <div className={s.contacts}>
          <div className={s.map}>
            <MapsComponent
              id="maps"
              className={s.mapLayer}
              useGroupingSeparator={true}
              format="n"
              zoomSettings={{ enable: true }}
            >
              <Inject
                services={[DataLabel, Legend, Marker, MapsTooltip, Zoom]}
              />
              <LayersDirective>
                <LayerDirective
                  shapeData={world_map}
                  shapeDataPath="Country"
                  shapePropertyPath="name"
                  tooltipSettings={{
                    visible: true,
                    valuePath: 'name',
                  }}
                  shapeSettings={{
                    colorValuePath: 'density',
                    fill: 'rgb(115,143,199)',
                  }}
                >
                  <MarkersDirective>
                    <MarkerDirective
                      visible={true}
                      dataSource={[
                        {
                          name: 'Ukraine',
                          latitude: '48.383022',
                          longitude: '31.1828699',
                        },
                        {
                          name: 'Italy',
                          latitude: '41.29246',
                          longitude: '12.5736108',
                        },
                        {
                          name: 'Poland',
                          latitude: '51.9189046',
                          longitude: '19.1343786',
                        },
                      ]}
                      tooltipSettings={{
                        visible: true,
                        valuePath: 'name',
                      }}
                      shape="Balloon"
                      height={15}
                      width={15}
                      animationDuration={0}
                    ></MarkerDirective>
                  </MarkersDirective>
                </LayerDirective>
              </LayersDirective>
            </MapsComponent>
          </div>
          {/* <div className={s.map}>
            <Map
              google={this.props.google}
              zoom={15}
              className={s.myMap}
              initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            />
          </div> */}
          <div className={s.adresses}>
            {/* <h4 className={s.titleOne}>Find us</h4> */}
            <h1 className={s.titleTwo}>
              <Trans i18nKey="header__menuContacts">Contacts</Trans>
            </h1>
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
                    Poland :{' '}
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
        <div className={s.askUsBlock}>
          <AskUs />
        </div>
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: api,
// })(Contacts);
