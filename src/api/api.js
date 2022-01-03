import * as axios from "axios";

const baseUrl = `https://goquotes-api.herokuapp.com/api`;

export const getQuote = () => {
  return axios.get(baseUrl + `/v1/random?count=1`).then((response) => {
    return response.data.quotes;
  });
};
