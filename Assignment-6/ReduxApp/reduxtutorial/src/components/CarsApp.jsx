import React from "react";
import Car from "./Car";
import store from "../redux";
import { useMyDispatch, useMySelector } from "../redux/useMySelector";

export default function CarsApp() {
  const cars = useMySelector((state) => state);
  const dispatch = useMyDispatch();
  console.log(store);

  const sellCarHandler = (id) => {
    console.log(dispatch);
    dispatch({ type: "SELL", payload: id });
    // console.log(store.getState());
  };

  return (
    <div>
      {cars.map((car) => (
        <Car car={car} sellCarHandler={sellCarHandler} key={car.id} />
      ))}
    </div>
  );
}
