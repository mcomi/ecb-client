import React, { useState } from "react";
import Card from "./Card";

export default function CardList({ data, handleSelectCar }) {
  const [cars, setCars] = useState(data);
  return (
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
      {cars.map((car) => {
        return (
          <Card car={car} handleSelectCar={handleSelectCar} key={car.id} />
        );
      })}
    </div>
  );
}
