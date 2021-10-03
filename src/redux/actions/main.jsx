export const LOAD_RENTAL_DETAILS_START = "LOAD_RENTAL_DETAILS_START";
export const LOAD_RENTAL_DETAILS_SUCCESS = "LOAD_RENTAL_DETAILS_SUCCESS";
export const LOAD_RENTAL_DETAILS_ERROR = "LOAD_RENTAL_DETAILS_ERROR";

const replaceKeys = (obj: JSON): JSON => {
  if (obj instanceof Array) {
    return obj.map(replaceKeys);
  }
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [
        key.replace("@", ""),
        Array.isArray(value)
          ? value.map(replaceKeys)
          : typeof value == "object"
          ? replaceKeys(value)
          : value,
      ];
    })
  );
};

export const loadCarRentalData = () => (dispatch) => {
  dispatch({ type: LOAD_RENTAL_DETAILS_START });

  fetch("http://www.cartrawler.com/ctabe/cars.json")
    .then((response) => response.json())
    .then((data) => replaceKeys(data))
    .then((data) => {
      setTimeout(
        () => dispatch({ type: LOAD_RENTAL_DETAILS_SUCCESS, payload: data }),
        0
      );
    })
    .catch((error) => {
      console.warn(error);
      return dispatch({ type: LOAD_RENTAL_DETAILS_ERROR });
    });
};
