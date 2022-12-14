import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/app";
import { MainLayout } from "../../layouts";
import { MapOnlyPoint } from "../../sharedComponent/maps";
import { getAddressesSto } from "../../store/appSlice";
import {
  ServiceStation,
  Services,
  ServiceSearch,
  ServiceChoice,
  Actions,
  WorkStages,
  Franchise,
  Brands,
  HomeMap,
} from "./components";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { mapOnlyPoint, citys } = useAppSelector((state) => state.app);
  useEffect(() => {
    dispatch(getAddressesSto());
  }, []);
  return (
    <MainLayout>
      <ServiceStation />
      <Services />
      <ServiceSearch />
      <ServiceChoice />
      <HomeMap data={mapOnlyPoint} citys={citys} />
      <Actions />
      <WorkStages />
      <Franchise />
      <Brands title="Расширенные гарантии бренды" />
    </MainLayout>
  );
};
