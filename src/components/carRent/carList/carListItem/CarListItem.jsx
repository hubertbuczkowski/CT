import React from "react";
import style from "./CarListItem.module.css";
import StatusCommon from "./Status";
import { currencyCodes } from "../../../../constants/currencyCodes";
import DetailsElement from "./DetailsElement";

import type { VehAvail, Vendor } from "../../../../redux/reducers/main";

type Props = {
  data: VehAvail & Vendor,
};

const CarListItem = ({ data, onClick }: Props) => {
  const { Status, Vehicle, TotalCharge, Vendor } = data;
  return (
    <tr className={style.listItemContainer} onClick={() => onClick(data)}>
      <td className={style.photoContainer}>
        <img
          alt={Vehicle.VehMakeModel.Name}
          src={Vehicle.PictureURL}
          className={style.image}
        />
      </td>
      <td className={style.detailsContainer}>
        <div className={style.carMake}>
          <strong>{Vehicle.VehMakeModel.Name}</strong>{" "}
          <StatusCommon status={Status} />
        </div>
        <div className={style.details}>
          <DetailsElement
            icon={"airCondition"}
            value={Vehicle.AirConditionInd}
          />
          <DetailsElement icon={"baggage"} value={Vehicle.BaggageQuantity} />
          <DetailsElement icon={"door"} value={Vehicle.DoorCount} />
          <DetailsElement icon={"fuel"} value={Vehicle.FuelType} />
          <DetailsElement
            icon={"passengers"}
            value={Vehicle.PassengerQuantity}
          />
          <DetailsElement
            icon={"transmission"}
            value={Vehicle.TransmissionType}
          />
        </div>
      </td>
      <td className={style.priceContainer}>
        <strong className={style.price}>
          Total: {TotalCharge.RateTotalAmount} {currencyCodes[TotalCharge.CurrencyCode]}
        </strong>
        <span className={style.vendor}>Vendor: {Vendor.Name}</span>
      </td>
    </tr>
  );
};

export default CarListItem;
