import axios from "axios";
import getConfig from "next/config";
import React from "react";

import type { FormResponse } from "../../db";
const { publicRuntimeConfig } = getConfig() || {};
const baseUrl = `${publicRuntimeConfig}.apiUrl/form-response`;

let instance = axios.create({
  headers: {
    common: {
      authorization: "",
    },
  },
});

const getAllFormResponses = async () => {
  const res = await instance.get<FormResponse[]>(
    `${publicRuntimeConfig?.apiUrl}/form-responses`
  );
  return res;
};

const createFormResponse = async () => {
  const res = await instance.post<FormResponse>(
    `${publicRuntimeConfig?.apiUrl}/form-responses`
  );
  return res;
};

const FormResponseServices = {
  getAllFormResponses,
  createFormResponse,
};
export default FormResponseServices;
