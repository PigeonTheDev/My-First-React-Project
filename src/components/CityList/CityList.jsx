import React from "react";
import { useState } from "react";
import axios from "axios";

export const CityList = (props) => {
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const getURLdata = async () => {
    setLoading(true);
    const url = `https://i3btr8wa1k.execute-api.eu-west-1.amazonaws.com/api/city`;
    let response = await axios.get(url, {
      headers: { "X-Api-Key": "munAsYrYVw3xwKt8v9AOo2mpkTLf026U9mHSBf14" },
    });
    if (response.status === 200) {
      setLoading(false);
    }
    return response.data.data;
  };

  const addCities = async () => {
    const gottenCities = await getURLdata();

    const cityNameList = [];
    for (let i = 0; i < gottenCities.length; i++) {
      cityNameList.push(gottenCities[i].name);
      cityNameList.push(" ");
    }
    setCity(cityNameList);
    props.onClick(city);
  };

  return (
    <>
      {loading && <div className="loading">Loading...</div>}
      <button onClick={addCities}>Show Cities</button>
    </>
  );
};
