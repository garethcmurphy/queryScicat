"use strict";
var requestPromise = require("request-promise");

function stringEncode(fields) {
  const fieldString = JSON.stringify(fields);
  return encodeURIComponent(fieldString);
}

async function ESSrequest(queryObject) {
  var results;
  const essURI = "https://scicatapi.esss.dk/api/v3/Datasets/fullquery";
  const fields = { text: "NMX" };
  const limits = { limit: "1" };
  const encodedFields = stringEncode(fields);
  const encodedLimits = stringEncode(limits);
  const finalURI = essURI + "?fields" + encodedFields + "&limits=" + encodedLimits;
  var searchOptions = {
    method: "GET",
    uri: finalURI
  };
  try {
    const response = await requestPromise(searchOptions);
    console.log(response);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }

  return results;
}

if (require.main === module) {
  ESSrequest();
}
