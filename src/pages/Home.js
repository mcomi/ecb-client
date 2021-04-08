import React, { useState, useEffect } from "react";
import { getCars } from "../api/cars";
import CardList from "../components/CardList";
import Modal from "../components/Modal";
import { createCustomer } from "../api/customers";

export default function Home() {
  const [selectedCar, setSelectedCar] = useState({});
  const [cars, setCars] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function loadCars() {
    try {
      const data = await getCars();
      if (data) setCars(data);
      console.log(data);
    } catch (error) {
      console.log("Error: Loading Cars");
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const handleSubmit = async ({ name, estimatedDate, idCar }) => {
    try {
      const newCostumer = createCustomer({
        name,
        estimatedDate,
        idCar,
      });
      if (newCostumer) console.log("New costumer created");
      handleModalClose();
    } catch (error) {
      console.log("Error: create customer");
    }
  };

  const selectCar = (car) => {
    setSelectedCar(car);
    openModal();
  };

  return (
    <div className="flex-grow flex overflow-x-hidden">
      <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky z-10 top-0">
          <h3 className="text-3xl">Services</h3>
          <h5 className="pt-3 pb-3 text-xl">Maintenance</h5>
        </div>

        <div className="m:px-7 sm:pt-7 px-4 pt-4">
          <div className="container my-12 mx-auto px-4 md:px-12">
            {cars.length > 0 ? (
              <CardList data={cars} handleSelectCar={selectCar} />
            ) : (
              <h1>No data found</h1>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        handleClose={handleModalClose}
        handleSubmit={handleSubmit}
        car={selectedCar}
      ></Modal>
    </div>
  );
}
