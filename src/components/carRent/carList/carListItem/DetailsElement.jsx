import React from "react";
import style from "./CarListItem.module.css";
import {
  AcUnit,
  Work,
  LocalGasStation,
  People,
  Check,
  NotInterested,
} from "@material-ui/icons";
import carDoorIcon from "../../../../assets/carDoorIcon.svg";
import transmission from "../../../../assets/transmission.svg";

type Props = {
  icon:
    | "airCondition"
    | "baggage"
    | "door"
    | "fuel"
    | "passengers"
    | "transmission"
    | "true"
    | "false",
  value: string,
};

const Icon = ({ icon }) => {
  switch (icon) {
    case "airCondition":
      return <AcUnit className={style.icon} />;
    case "baggage":
      return <Work className={style.icon} />;
    case "door":
      return <img alt={icon} src={carDoorIcon} className={style.icon} />;
    case "fuel":
      return <LocalGasStation className={style.icon} />;
    case "passengers":
      return <People className={style.icon} />;
    case "transmission":
      return <img alt={icon} src={transmission} className={style.icon} />;
    case "true":
      return <Check className={`${style.icon} ${style.available}`} />;
    case "false":
      return <NotInterested className={`${style.icon} ${style.unavailable}`} />;
    default:
      return <strong className={style.elementValue}>{icon}</strong>;
  }
};

const DetailsElement = ({ icon, value }: Props) => {
  return (
    <div className={style.detailsIconContainer}>
      <Icon icon={icon} />
      <div className={style.spacer} />
      <Icon icon={value} />
    </div>
  );
};

export default DetailsElement;
