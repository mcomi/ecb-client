import React from "react";
import { useInputValue } from "../hooks/useInputValue";

export default function Modal({ car, handleSubmit, handleClose, isOpen }) {
  const { estimatedate, make, model } = car;
  const date = estimatedate
    ? new Date(estimatedate)
    : new Date(+new Date() + 7 * 24 * 60 * 60 * 1000);

  const name = useInputValue("");

  const handleSubmitCustomer = () => {
    handleSubmit({
      name: name.value,
      estimatedDate: date,
      idCar: car.id,
    });
    name.reset();
  };

  const handleCloseModal = () => {
    name.reset();
    handleClose();
  };
  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {make} {model}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClose}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="w-full">
                    <div class="relative mb-4">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder=""
                        {...name}
                      />
                    </div>
                    <div class="mb-4">
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Estimated Delivery Date
                      </label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="estimateddate"
                          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                          value={date.toLocaleString()}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={handleSubmitCustomer}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
