// import api from "./index";

const cars = [
  {
    description: " change of suspension",
    make: "Nissan",
    model: "Versa",
    estimatedate: "2021/12/01",
    id: 3340,
    image: "https://3.23.108.188/cars/versa.jpg",
  },
  {
    description: " motor adjustment",
    make: " Honda ",
    model: "CR-V",
    estimatedate: "",
    id: 3341,
    image: "https://3.23.108.188/cars/CR-V.jpg",
  },
  {
    description: " engine tuning ",
    make: "Honda",
    model: "Civic",
    estimatedate: "2020/20/12",
    id: 3342,
    km: 90000,
    image: "https://3.23.108.188/cars/civic.jpg",
  },
  {
    description: " oil change ",
    make: " Volkswaguen",
    model: "Tiguan",
    km: 13500,
    id: 3343,
    image: "https://3.23.108.188/cars/tiguan.jpg",
  },
  {
    description: " change of pads ",
    make: " Nissan ",
    model: "Sentra",
    km: 6000,
    id: 3344,
    image: "https://3.23.108.188/cars/sentra.jpg",
  },
  {
    description: " change of pads ",
    make: "Volkswagen",
    model: "Vento",
    km: 80050,
    id: 3345,
    image: "https://3.23.108.188/cars/vento.jpg",
  },
  {
    description: "Change Transmission (CVT)",
    make: "Chevrolet",
    model: "Aveo NG",
    estimatedate: "2021/09/07",
    km: 33460,
    id: 3346,
    image: "https://3.23.108.188/cars/aveo.jpg",
  },
  {
    description: "Change ligths",
    make: "Chevrolet",
    model: "Spark",
    km: 16098,
    id: 3347,
    image: "https://3.23.108.188/cars/spark.jpg",
  },
];

export const getCars = () => {
  // return api.cars.put("/cars", ejemplar).then((res) => {
  //   return res.data;
  // }
  return cars;
};
