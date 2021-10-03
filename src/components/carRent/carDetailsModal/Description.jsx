import React from "react";
import style from "./CarDetailsModal.module.css";

type Props = {
  category: string,
  value: string,
};

const getText = (value) => {
  switch (value) {
    case "true":
      return "Available";
    case "false":
      return "Unavailable";
    default:
      return value;
  }
};

const Description = ({ category, value }: Props) => {
  return (
    <tr className={style.descritpionItemContainer}>
      <td className={style.category}>
        <strong>{category}</strong>
      </td>
      <td className={style.value}>{getText(value)}</td>
    </tr>
  );
};

export default Description;
