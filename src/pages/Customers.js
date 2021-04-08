import React, { useState, useEffect } from "react";
import { getCustomers } from "../api/customers";

export default function Customers() {
  const [customers, setcustomers] = useState([]);

  async function loadCustomers() {
    try {
      const data = await getCustomers();
      if (data) setcustomers(data);
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div className="m:px-7 sm:pt-7 px-4 pt-4">
      <table class="w-full text-left">
        <thead>
          <tr class="text-gray-400">
            <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
              Estimated Date
            </th>
            <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
              Name
            </th>
            <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800 hidden md:table-cell">
              Car ID
            </th>
            <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-gray-800">
              Created
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-600 dark:text-gray-100">
          {customers.length > 0
            ? customers.map((customer) => {
                return (
                  <tr>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      {customer.estimatedDate}
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      {customer.name}
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">
                      {customer.idCar}
                    </td>
                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                      {customer.createDate}
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
