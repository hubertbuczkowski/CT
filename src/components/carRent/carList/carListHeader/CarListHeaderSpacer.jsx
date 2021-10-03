import React from "react";
import style from "./CarListHeader.module.css";

type Props = {
  pickupTime: string,
  returnTime: string,
};

const convertSecondsToTime = (seconds: Number): string => {
  const day = 86400;
  const hour = 3600;

  let days = Math.floor(seconds / day);
  const hours = Math.floor((seconds - days * day) / hour);

  if (hours > 12) {
    days++;
  }

  var returnTime = days > 1 ? `${days} days` : "1 day";

  return returnTime.trim();
};

const CarListHeaderSpacer = ({ pickupTime, returnTime }: Props) => {
  const countTime = () => {
    const start = new Date(pickupTime);
    const finish = new Date(returnTime);
    const diff = finish.getTime() - start.getTime();
    const seconds = diff / 1000;

    return convertSecondsToTime(seconds);
  };
  return (
    <div className={style.spacerContainer}>
      <div className={style.spacerLine}></div>
      <div className={style.spacerText}>{countTime()}</div>
      <div className={style.spacerLine}></div>
    </div>
  );
};

export default CarListHeaderSpacer;
