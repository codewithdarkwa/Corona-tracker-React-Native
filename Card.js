import React from "react";
import { View, Text } from "react-native";
import { Card, Title } from "react-native-paper";

const Cards = ({ data }) => {
  return (
    <>
      {Object.keys(data).length > 0 && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Card style={{ backgroundColor: "red", padding: 5 }}>
            <Title>Confirmed Cases</Title>
            <Text style={{ fontSize: 20 }}>{data.confirmed.value}</Text>
          </Card>
          <Card style={{ backgroundColor: "green", padding: 5 }}>
            <Title>Recovered</Title>
            <Text style={{ fontSize: 20 }}>{data.recovered.value}</Text>
          </Card>
          <Card style={{ backgroundColor: "black", padding: 10 }}>
            <Title style={{ color: "#fff" }}>Deaths</Title>
            <Text style={{ color: "#fff", fontSize: 20 }}>
              {data.deaths.value}
            </Text>
          </Card>
        </View>
      )}
    </>
  );
};
export default Cards;
