import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const fetchCities = async () => {
  return axios
    .get(`https://i3btr8wa1k.execute-api.eu-west-1.amazonaws.com/api/city`, {
      headers: { "X-Api-Key": "munAsYrYVw3xwKt8v9AOo2mpkTLf026U9mHSBf14" },
    })
    .then((response) => {
      return response.data.data;
    });
};

export const CityList = () => {
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchCities()
      .then((responseCities) => {
        setCity(responseCities.map((a) => a.name));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <>Loading...</>;

  if (show === false) {
    return <button onClick={() => setShow(true)}>Show Cities</button>;
  }

  return (
    <>
      <h3>Cities: {city.join(", ")}</h3>
      <button onClick={() => setShow(false)}>Hide Cities</button>
    </>
  );
};
