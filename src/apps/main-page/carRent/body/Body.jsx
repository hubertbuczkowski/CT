import React from "react";
import { connect } from "react-redux";
import style from "./Body.module.css";
import { CAR_DETAILS_MODAL } from "../../../../components/carRent/carDetailsModal/CarDetailsModal";

import CarList from "../../../../components/carRent/carList/CarList";
import { toogleModal } from "../../../../redux/actions/modal";

import type { VehAvailRSCore } from "../../../../redux/reducers/main";

type Props = {
  data: VehAvailRSCore,
  onSelectCar: Function,
};

const Body = ({ data, onSelectCar }: Props) => {
  const Content = () => {
    return data
      ? data.map((rentingPoint) => (
          <CarList key={0} data={rentingPoint.VehAvailRSCore} onClick={onSelectCar} />
        ))
      : null;
  };

  return (
    <div className={style.body}>
      <div className={`${true ? style.selected : null} ${style.mapContainer}`}>
        <Content />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { rentingPoints } = state.main;
  return {
    data: rentingPoints,
  };
};

const mapDispatchProps = (dispatch) => ({
  onSelectCar: (data) => {
    dispatch(toogleModal(CAR_DETAILS_MODAL, data));
  },
});

export default connect(mapStateToProps, mapDispatchProps)(Body);
