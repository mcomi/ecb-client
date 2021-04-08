import api from "./index";

export const getCustomers = () => {
  return api.customers.get("/customers").then((res) => {
    return res.data;
  });
};

export const createCustomer = (customer) => {
  return api.customers.post("/customer", customer).then((res) => {
    console.log(res);
    return res;
  });
};
