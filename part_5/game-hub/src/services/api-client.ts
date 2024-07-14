import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "fcdc0b469cae4492bc203b1a3ba40f7f" },
});
