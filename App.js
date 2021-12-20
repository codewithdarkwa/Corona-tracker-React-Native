import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { CoronaImage } from "./CoronaImage";
import Cards from "./Card";
import CountryPicker from "./CountryPicker";

import { fetchData } from "./api";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => setData(await fetchData());
    getData();
  }, []);

  const handleCountrySelector = async (country) => {
    const fetchCountryData = await fetchData(country);
    setData(fetchCountryData);
  };

  return (
    <>
      <CoronaImage />
      <Cards data={data} />
      <CountryPicker handleCountrySelector={handleCountrySelector} />
    </>
  );
}

const styles = StyleSheet.create({});
