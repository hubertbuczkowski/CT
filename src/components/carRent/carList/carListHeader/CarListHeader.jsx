import React from "react";
import style from "./CarListHeader.module.css";
import LocationBanner from "./CarListHeaderBanner";
import Spacer from "./CarListHeaderSpacer";

import type { VehAvailRsCore } from "../../../../redux/reducers/main";

export const PICKUP_TITLE = "Pickup";
export const RETURN_TITLE = "Return";

type Props = {
  data: VehAvailRsCore,
};

const CarListHeader = ({ data }: Props) => {
  const { PickUpDateTime, ReturnDateTime, PickUpLocation, ReturnLocation } =
    data;

  return (
    <div className={style.header}>
      <LocationBanner
        title={PICKUP_TITLE}
        location={PickUpLocation.Name}
        time={PickUpDateTime}
      />
      <Spacer pickupTime={PickUpDateTime} returnTime={ReturnDateTime} />
      <LocationBanner
        title={RETURN_TITLE}
        location={ReturnLocation.Name}
        time={ReturnDateTime}
      />
    </div>
  );
};

export default CarListHeader;
