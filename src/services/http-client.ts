import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "095da955f654402e8cd972b143d9ec16",
  },
});
