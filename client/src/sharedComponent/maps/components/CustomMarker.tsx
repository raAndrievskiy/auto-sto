import {Marker, InfoWindow} from "@react-google-maps/api";
import React, {useState} from "react";
import icon from "../../../assets/icons/marker-point.svg";
import background from "../../../assets/icons/tooltipBg.svg";
import styles from "../style.module.scss";

interface MarkerProps {
    lat: number;
    lng: number;
    title: string;
    handleClick: () => void;
    handleOverMarker?: () => void
}

export const CustomMarker = (
    {
        lat,
        lng,
        title,
        handleClick,
        handleOverMarker = () => null
    }: MarkerProps) => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);

    const handleMouseOver = () => {
        setShowTooltip(true);
        handleOverMarker()
    };
    const handleMouseOut = () => {
        setShowTooltip(false);
    };
    return (
        <>
            <Marker
                icon={{
                    url: icon,
                    anchor: new google.maps.Point(5, 58),
                }}
                position={{lat, lng}}
                onMouseOver={handleMouseOver}
                onClick={handleClick}
            >
                {showTooltip ? (
                    <InfoWindow
                        position={{lat, lng}}
                        options={{
                            disableAutoPan: true,
                            maxWidth: 200,
                            pixelOffset: new google.maps.Size(0, 40),
                        }}
                    >
                        <div onMouseOut={handleMouseOut} className={styles.tooltip}>
                            <p className={styles.titleMarker}>{title}</p>
                            <button
                                className={styles.btnMarker}
                                onClick={() => alert("Pressed!")}
                            >
                                Запись на СТО
                            </button>
                        </div>
                    </InfoWindow>
                ) : null}
            </Marker>
        </>
    );
};
