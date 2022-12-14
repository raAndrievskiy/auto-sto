import React, {useEffect, useState, useCallback} from "react";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import styles from "./style.module.scss";
import {AddressMap} from "./types";
import {CustomMarker} from "./components";
import {useWindowResize} from "../../hooks/useWindowResize";
import {Container} from ".."
import mapStyles from './mapStyles/mapOnlyPointStyles'
import {ChooseCitys} from "../chooseCitys";
import {getMapSize} from "../../helpers/getMapSize";

interface MapOnlyPointProps {
    data: AddressMap[];
    center: { lat: number, lng: number };
    zoom: number;
    handleClickMarker: (item: AddressMap) => void;
    handleOverMarker?: (item: AddressMap) => void
}

export const MapOnlyPoint = ({
                                 data,
                                 zoom,
                                 center,
                                 handleClickMarker,
                                 handleOverMarker = () => null
                             }: MapOnlyPointProps) => {
    const {size} = useWindowResize();
    const [mapRef, setMapRef] = useState<any>(null);

    const [animMarker, setAnimMarker] = useState(0);
    const [clickedLatLng, setClickedLatLng] = useState<any>(null);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: "AIzaSyDFCimF_vivKU3HILRbpAQNHq_ImmNXtAY",
        id: "map-only-point",
        libraries: ["places", "visualization", "drawing", "geometry"],
    });


    const renderMap = () => {
        return (
            <>
                <GoogleMap
                    onLoad={(mapInstance) => setMapRef(mapInstance)}
                    mapTypeId={"ROADMAP"}
                    onClick={(e: any) => setClickedLatLng(e.latLng.toJSON())}
                    center={center}
                    zoom={zoom}
                    options={{
                        scrollwheel: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        styles: mapStyles.mapStyle
                    }}
                    mapContainerStyle={getMapSize(size)}
                >
                    <>
                        {data.map((item) => (
                            <CustomMarker
                                lat={Number(item.lat)}
                                lng={Number(item.lng)}
                                title={item.name}
                                key={item.name}
                                handleClick={() => handleClickMarker(item)}
                                handleOverMarker={() => handleOverMarker(item)}
                            />
                        ))}
                    </>
                </GoogleMap>
            </>
        );
    };

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    return (
        <div className={styles.wrapMap} style={getMapSize(size)}>
            {isLoaded ? renderMap() : "Loading ..."}
        </div>
    );
};
