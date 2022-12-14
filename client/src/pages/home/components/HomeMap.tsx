import React, { useState } from "react";
import { Container } from "../../../sharedComponent";
import { ChooseCitys } from "../../../sharedComponent/chooseCitys";
import { MapOnlyPoint } from "../../../sharedComponent/maps";
import { AddressMap } from "../../../sharedComponent/maps/types";

interface MapOnlyPointProps {
  data: AddressMap[];
  citys: string[];
}

const defaultCoords = { lat: 53.893908451831294, lng: 27.505486254795183 };

export const HomeMap = ({ data, citys }: MapOnlyPointProps) => {
  const [center, setCenter] = useState(defaultCoords);
  const [zoom, setZoom] = useState<number>(12);

  const centerBySelectedCity = (city: string) => {
    const curensCitys = data.filter((item) => item.city === city);
    const { lat, lng } = curensCitys[0];
    setCenter({ lat: Number(lat), lng: Number(lng) });
    setZoom(12);
  };

  const handleClickMarker = (item: AddressMap) => {
    console.log(item);
  };

  return (
    <Container>
      <h2 className="title">Выберите удобное для вас СТО</h2>
      <ChooseCitys citys={citys} handleSelectCity={centerBySelectedCity} />
      <MapOnlyPoint
        data={data}
        center={center}
        zoom={zoom}
        handleClickMarker={handleClickMarker}
      />
    </Container>
  );
};
