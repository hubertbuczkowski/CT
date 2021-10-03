import React from "react";
import style from "./CarList.module.css";
import CarListItem from "./carListItem/CarListItem";
import CarListHeader from "./carListHeader/CarListHeader";

import type {
  VehAvailRsCore,
  VehVendorAvails,
} from "../../../redux/reducers/main";

type Props = {
  data: VehAvailRsCore,
  onClick: Function,
};

const generateVechicleList = (
  vehicleVendors: VehVendorAvails[],
  onClick: Function
) => {
  let vehicleListData = vehicleVendors.map(mergeVendorAndVechicle).flat();
  vehicleListData = vehicleListData.sort(sortingPrice);
  return vehicleListData.map((vehicleList, index) => (
    <CarListItem key={index} data={vehicleList} onClick={onClick} />
  ));
};

const mergeVendorAndVechicle = (vehVendorAvail: VehVendorAvails) => {
  const { Vendor, VehAvails } = vehVendorAvail;
  return VehAvails.map((vehicle) => ({ ...vehicle, Vendor }));
};

const sortingPrice = (a, b) => {
  return (
    parseFloat(a.TotalCharge.RateTotalAmount) -
    parseFloat(b.TotalCharge.RateTotalAmount)
  );
};



const CarList = ({ data, onClick }: Props) => {
  const { VehRentalCore, VehVendorAvails } = data;
  const vehicleList = generateVechicleList(VehVendorAvails, onClick);

  return (
    <div className={style.container}>
      <CarListHeader data={VehRentalCore} />
      <table className={style.vehicleTable}>
        <tbody>
          {vehicleList}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
