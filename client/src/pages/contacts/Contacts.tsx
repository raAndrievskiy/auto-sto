import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/app";
import { useWindowResize } from "../../hooks/useWindowResize";
import { MainLayout } from "../../layouts";
import { Container } from "../../sharedComponent";
import { ChooseCitys } from "../../sharedComponent/chooseCitys";
import { MapOnlyPoint } from "../../sharedComponent/maps";
import { AddressMap } from "../../sharedComponent/maps/types";
import { getAddressesSto } from "../../store/appSlice";
import commonStyles from "../../styles/style.module.scss";
import { AddressCard } from "./components";
import style from "./style.module.scss";

const defaultCoords = { lat: 53.893908451831294, lng: 27.505486254795183 };

export const Contacts = () => {
  const { size } = useWindowResize();
  const { citys, mapOnlyPoint } = useAppSelector((state) => state.app);
  const [center, setCenter] = useState(defaultCoords);
  const [zoom, setZoom] = useState<number>(12);
  const [selectedSto, setSelectedSto] = useState<AddressMap>(mapOnlyPoint[0]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAddressesSto());
  }, []);
  useEffect(() => {
    setSelectedSto(mapOnlyPoint[0]);
  }, [mapOnlyPoint]);

  const centerBySelectedCity = (city: string) => {
    const curensCitys = mapOnlyPoint.filter((item) => item.city === city);
    const { lat, lng } = curensCitys[0];
    setCenter({ lat: Number(lat), lng: Number(lng) });
    setZoom(12);
  };

  const handleClickMarker = (item: AddressMap) => {
    console.log(item);
  };
  const handleMarkerOver = (item: AddressMap) => {
    setSelectedSto(item);
  };

  return (
    <MainLayout>
      <Container>
        <div className={commonStyles.flex}>
          <h1
            style={{ marginRight: "102px" }}
            className={`${commonStyles.title} ${commonStyles.title__uppercase}`}
          >
            КОНТАКТЫ сто
          </h1>
          <ChooseCitys citys={citys} handleSelectCity={centerBySelectedCity} />
        </div>
        <div className={style.wrapMap}>
          {size > 1024 && (
            <div className={style.wrapCard}>
              <AddressCard
                country={selectedSto?.country}
                name={selectedSto?.name}
                franshes={selectedSto?.franshes}
                lat={selectedSto?.lat}
                lng={selectedSto?.lng}
                city={selectedSto?.city}
                adderess={selectedSto?.adderess}
                phone={selectedSto?.phone}
                workTime={selectedSto?.workTime}
                email={selectedSto?.email}
              />
            </div>
          )}
          <MapOnlyPoint
            data={mapOnlyPoint}
            zoom={8}
            center={center}
            handleOverMarker={handleMarkerOver}
            handleClickMarker={handleClickMarker}
          />
        </div>
      </Container>
    </MainLayout>
  );
};
