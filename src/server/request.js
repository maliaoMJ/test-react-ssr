import Axios from "axios";

const createInstance = req =>
  Axios.create({
    baseURL: "http://192.168.50.33:8000",
    timeout: 60000,
    headers: {
      cookie: req.get("cookie") || ""
    }
  });

export default createInstance;
