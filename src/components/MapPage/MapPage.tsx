import React, { FC } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import styles from './MapPage.module.scss';

const MapPage: FC = () => {
  return (
    <div className={styles.mapPageWrapper}>
      <YMaps>
        <div>
          Автоматы "Родничок" на карте
          <Map width={550}
               height={500} 
               defaultState = {
              { center: [56.492644, 85.054446],
               zoom: 10,
               controls: ["zoomControl", "fullscreenControl"],
              }}
               modules={["control.ZoomControl", "control.FullscreenControl"]} >
            <Placemark defaultGeometry = {[56.492644, 85.054446]} 
                       modules={["geoObject.addon.balloon"]}
                       properties={{
                        balloonContentBody:
                          "Автомат питьевой воды Родничок, ул. Павла Нарановича 10",
                      }}
            />
          </Map>
        </div>
      </YMaps>     
    </div>
  );
};

export default MapPage;
