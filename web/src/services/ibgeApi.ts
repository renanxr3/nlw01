// https://servicodados.ibge.gov.br/api/v1/localidades/estados
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

import axios from "axios";

const ibgeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/",
});

export default ibgeApi;
