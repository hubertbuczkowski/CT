import React from "react";
import style from "./CarListHeader.module.css";
import { FlightLand, FlightTakeoff } from "@material-ui/icons";
import { PICKUP_TITLE } from "./CarListHeader";

import months from "../../../../constants/months";

import type { VehAvailRsCore } from "../../../../redux/reducers/main";

type Props = {
  data: VehAvailRsCore,
};

const formatTime = (datetime: string): string => {
  const date = new Date(datetime);

  return (
    ("0" + date.getUTCDate()).slice(-2) +
    " " +
    months[date.getMonth()] +
    " " +
    date.getUTCFullYear() +
    " " +
    ("0" + date.getUTCHours()).slice(-2) +
    ":" +
    ("0" + date.getUTCMinutes()).slice(-2)
  );
};

const CarListHeaderBanner = ({ title, location, time }: Props) => {
  let icon = <FlightTakeoff className={style.bannerIcon} />;
  if (title === PICKUP_TITLE) {
    icon = <FlightLand className={style.bannerIcon} />;
  }
  return (
    <div className={style.bannerConatiner}>
      <div className={style.bannerHeader}>
        {icon} {title}
      </div>
      <div className={style.bannerBody}>
        <strong>{location}</strong>
        <div className={style.location}>{formatTime(time)}</div>
      </div>
    </div>
  );
};

export default CarListHeaderBanner;
