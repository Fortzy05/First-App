import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID gvq8YEzyMedtdM-JSYcYrYcv2mQY29xo996zHubcxZE",
  },
});
