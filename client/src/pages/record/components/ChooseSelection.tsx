import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useAppSelector, useAppDispatch } from "../../../hooks/app";
import { CustomButton, TitleH4 } from "../../../fields";
import { MapIcon } from "../../../customIcons";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { getAddressesSto } from "../../../store/appSlice";
import { AddressMap } from "../../../sharedComponent/maps/types";
import { MapOnlyPoint } from "../../../sharedComponent/maps";
import styles from "../styles.module.scss";

const defaultCoords = { lat: 53.893908451831294, lng: 27.505486254795183 };

export const ChooseSelection = () => {
  const { size } = useWindowResize();
  const [address, setAddress] = React.useState("");
  const { citys, mapOnlyPoint } = useAppSelector((state) => state.app);
  const [center, setCenter] = useState(defaultCoords);
  const [zoom, setZoom] = useState<number>(12);
  const [selectedSto, setSelectedSto] = useState<AddressMap>(mapOnlyPoint[0]);
  const [showMap, setShowMap] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAddressesSto());
  }, []);
  useEffect(() => {
    setSelectedSto(mapOnlyPoint[0]);
  }, [mapOnlyPoint]);

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };

  const handleClickMarker = (item: AddressMap) => {
    console.log(item);
  };
  const handleMarkerOver = (item: AddressMap) => {
    setSelectedSto(item);
  };

  return (
    <Accordion
      className={styles.selectionAccordion}
      sx={{ boxShadow: "none", marginBottom: "20px" }}
      expanded
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        sx={{ background: "#F9F9F9", borderRadius: "12px" }}
        id="panel1bh-content"
      >
        <Typography className={styles.styleTitle}>1. Выбор СТО</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className={styles.selectionAccordion__text}>
          <TitleH4>Доступные СТО Минска</TitleH4>
          <div
            className={styles.changeButton}
            onClick={() => setShowMap(!showMap)}
          >
            <MapIcon width={32} heigth={32} />
            Выбрать СТО на карте
          </div>
        </div>

        {showMap ? (
          <div className={styles.wrapMap}>
            <MapOnlyPoint
              data={mapOnlyPoint}
              zoom={8}
              center={center}
              handleOverMarker={handleMarkerOver}
              handleClickMarker={handleClickMarker}
            />
          </div>
        ) : (
          <div className={styles.selectionAccordion__button}>
            {size > 768 ? (
              <>
                <CustomButton color="white">
                  Ул. Фрунзенская 25/2 “СТО 24ПДС”
                </CustomButton>
                <CustomButton color="white">
                  Ул. Фрунзенская 25/2 “СТО 24ПДС”
                </CustomButton>
                <CustomButton color="white">
                  Ул. Фрунзенская 25/2 “СТО 24ПДС”
                </CustomButton>
                <CustomButton color="white">
                  Ул. Фрунзенская 25/2 “СТО 24ПДС”
                </CustomButton>
                <CustomButton color="white">
                  Ул. Фрунзенская 25/2 “СТО 24ПДС”
                </CustomButton>
                <CustomButton color="white">
                  Ул. Фрунзенская 25/2 “СТО 24ПДС”
                </CustomButton>
              </>
            ) : (
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={address}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>
                    Ул. Фрунзенская 25/2 “СТО 24ПДС”
                  </MenuItem>
                  <MenuItem value={20}>
                    Ул. Фрунзенская 25/2 “СТО 24ПДС”
                  </MenuItem>
                  <MenuItem value={30}>
                    Ул. Фрунзенская 25/2 “СТО 24ПДС”
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
