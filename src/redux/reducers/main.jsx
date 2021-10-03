import {
  LOAD_RENTAL_DETAILS_START,
  LOAD_RENTAL_DETAILS_SUCCESS,
  LOAD_RENTAL_DETAILS_ERROR,
} from "../actions/main";

type TotalCharge = {
  RateTotalAmount: string,
  EstimatedTotalAmount: string,
  CurrencyCode: string,
};

type VehMakeModel = {
  Name: string,
};

type Vehicle = {
  AirConditionInd: string,
  TransmissionType: string,
  FuelType: string,
  DriveType: string,
  PassengerQuantity: string,
  BaggageQuantity: string,
  Code: string,
  CodeContext: string,
  DoorCount: string,
  VehMakeModel: VehMakeModel,
  PictureURL: string,
};

type VehAvail = {
  Status: string,
  Vehicle: Vehicle,
  TotalCharge: TotalCharge,
};

type Vendor = {
  Code: string,
  Name: string,
};

type VehVendorAvail = {
  Vendor: Vendor,
  VehAvails: VehAvail[],
};

type Location = {
  Name: string,
};

type VehRentalCore = {
  PickupDateTime: string,
  ReturnDateTime: string,
  PickUpLocation: Location,
  ReturnLocation: Location,
};

type RSCore = {
  VehRentalCore: VehRentalCore,
  VehVendorAvails: VehVendorAvail,
};

type RentingPoint = {
  VehAvailRSCore: RSCore,
};

type Modal = {
  openModal: string,
  params: Object,
};

type State = {
  rentingPoints: RentingPoint[],
  modal: Modal,
};

const initialState: State = {
  rentingPoints: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RENTAL_DETAILS_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_RENTAL_DETAILS_ERROR:
    case LOAD_RENTAL_DETAILS_SUCCESS:
      return {
        ...state,
        rentingPoints: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
