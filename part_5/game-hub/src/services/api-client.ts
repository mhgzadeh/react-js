import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "44f36ab4590e47a8adf5c6355adaae08" },
});