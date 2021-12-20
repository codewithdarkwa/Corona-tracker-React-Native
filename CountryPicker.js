import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { fetchCountries } from "./api";
const CountryPicker = ({ handleCountrySelector }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => setCountries(await fetchCountries());
    getCountries();
  }, [setCountries]);
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Picker
        onValueChange={(value) => handleCountrySelector(value)}
        style={styles.picker}
        mode="dropdown"
      >
        <Picker.Item label="All" value="All" />
        {countries.map((country, index) => (
          <Picker.Item key={index} label={country} value={country} />
        ))}
      </Picker>
    </View>
  );
};

export default CountryPicker;

const styles = StyleSheet.create({
  picker: {
    marginVertical: 10,
    marginTop: 70,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
});
