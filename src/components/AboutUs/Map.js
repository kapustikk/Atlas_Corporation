import React, { Component } from 'react';
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
// import {Client} from "@googlemaps/google-maps-services-js";
// import axiosInstance from 'axios';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Trans } from 'react-i18next';
import world_map from '../Contacts/world-map.json';
import data from '../Contacts/data.json';
import countries from '../Contacts/countries.json';
// import api from '../api';
import s from '../AboutUs/AboutUs.module.css';
import three from '../images/03.svg';
import thirtyfour from '../images/34.svg';

export default class Maps extends Component {
  render() {
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

        {/* <div className={s.map}>
          <Map
            google={this.props.google}
            zoom={15}
            className={s.myMap}
            initialCenter={{ lat: 9.761927, lng: 79.95244 }}
          />
        </div> */}
        <div className={s.map}>
          <MapsComponent
            id="maps"
            className={s.mapLayer}
            useGroupingSeparator={true}
            format="n"
            zoomSettings={{ enable: true }}
          >
            <Inject services={[DataLabel, Legend, Marker, MapsTooltip, Zoom]} />
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
                    dataSource={data}
                    tooltipSettings={{
                      visible: true,
                      valuePath: 'name',
                    }}
                    shape="Balloon"
                    height={15}
                    width={15}
                    animationDuration={0}
                  ></MarkerDirective>
                  <MarkerDirective
                    visible={true}
                    dataSource={countries}
                    tooltipSettings={{
                      visible: true,
                      valuePath: 'name',
                    }}
                    shape="Circle"
                    height={10}
                    width={10}
                    animationDuration={0}
                    fill="#233d97"
                  ></MarkerDirective>
                </MarkersDirective>
              </LayerDirective>
            </LayersDirective>
          </MapsComponent>
        </div>
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: api,
// })(Maps);
