import React from "react";
import style from "./CarListItem.module.css";
import { CheckCircle, Cancel } from "@material-ui/icons";

export const AVAILABLE = "Available";
export const UNAVAILABLE = "Unavailable";

type Props = {
  status: string,
};

const Status = ({ status }: Props) => {
  const Sign = () =>
    status === AVAILABLE ? (
      <CheckCircle className={style.statusSign} />
    ) : (
      <Cancel className={style.statusSign} />
    );
  return (
    <span
      className={`
        ${status === AVAILABLE ? style.available : style.unavailable}
        ${style.statusContainer}
      `}
    >
      <Sign /> {status}
    </span>
  );
};

export default Status;
