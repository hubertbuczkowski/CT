import React, { Fragment } from "react";
import { connect } from "react-redux";
import style from "./CarDetailsModal.module.css";

import Modal from "../../common/modal/Modal";
import Description from "./Description";
import { currencyCodes } from "../../../constants/currencyCodes";

import type {
  Vehicle,
  TotalCharge,
  Vendor,
} from "../../../redux/reducers/main";

export const CAR_DETAILS_MODAL = "CAR_DETAILS_MODAL";

type Props = {
  Status: string,
  Vehicle: Vehicle,
  TotalCharge: TotalCharge,
  Vendor: Vendor,
};

const CarDetailsModal = ({ Status, Vehicle, TotalCharge, Vendor }: Props) => {
  const currencyCode = TotalCharge
    ? currencyCodes[TotalCharge.CurrencyCode]
    : null;

  return (
    <Modal name={CAR_DETAILS_MODAL} title={"Car details"}>
      {!Status && !Vehicle && !TotalCharge && !Vehicle ? (
        "No Data Provided, contact support service"
      ) : (
        <Fragment>
          <div className={style.image}>
            <img
              alt={Vehicle.VehMakeModel.Name}
              src={Vehicle.PictureURL}
              className={style.image}
            />
          </div>
          <table className={style.desctiption}>
            <tbody>
              <Description category={"Model"} value={Vehicle.VehMakeModel.Name} />
              <Description category={"Status"} value={Status} />
              <Description
                category={"Air Condition"}
                value={Vehicle.AirConditionInd}
              />
              <Description
                category={"Baggage Quantity"}
                value={Vehicle.BaggageQuantity}
              />
              <Description category={"Door Count"} value={Vehicle.DoorCount} />
              <Description category={"Fuel Type"} value={Vehicle.FuelType} />
              <Description
                category={"Passenger Quantity"}
                value={Vehicle.PassengerQuantity}
              />
              <Description
                category={"Transmission Type"}
                value={Vehicle.TransmissionType}
              />
              <Description category={"Drive Type"} value={Vehicle.DriveType} />
              <Description category={"Code"} value={Vehicle.Code} />
              <Description category={"Context"} value={Vehicle.CodeContext} />
              <Description
                category={"Total Amount Rate"}
                value={`${TotalCharge.RateTotalAmount} ${currencyCode}`}
              />
              <Description
                category={"EstimatedTotalAmount"}
                value={`${TotalCharge.EstimatedTotalAmount} ${currencyCode}`}
              />
              <Description category={"Vendor Name"} value={Vendor.Name} />
              <Description category={"Vendor Code"} value={Vendor.Code} />
            </tbody>
          </table>
        </Fragment>
      )}
    </Modal>
  );
};

const mapStateToProps = (state) => {
  const { Status, Vehicle, TotalCharge, Vendor } = state.modal.data;
  return {
    Status,
    Vehicle,
    TotalCharge,
    Vendor,
  };
};

export default connect(mapStateToProps)(CarDetailsModal);
