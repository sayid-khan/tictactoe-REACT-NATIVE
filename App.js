import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

let array = new Array(9).fill(0);

export default function App() {
  const [values, setValues] = useState({
    isCross: true,
    winMessage: "",
  });

  const [refresh, setRefresh] = useState(false);

  const getIcon = (number) => {
    if (array[number] !== 0) {
      return array[number] ? "cross" : "circle";
    }
    return "minus";
  };

  const resetGame = () => {
    setRefresh(true);
    array.fill(0);
    setValues({ isCross: true, winMessage: "" });
    setRefresh(false);
  };

  const changeMove = (number) => {
    if (array[number] === 0 && !values.winMessage) {
      array[number] = values.isCross;
      setValues({ isCross: !values.isCross });
      winGame(number);
    }
  };

  const winGame = (number) => {
    if (
      array[0] === array[number] &&
      array[1] === array[number] &&
      array[2] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (
      array[3] === array[number] &&
      array[4] === array[number] &&
      array[5] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (
      array[6] === array[number] &&
      array[7] === array[number] &&
      array[8] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (
      array[0] === array[number] &&
      array[3] === array[number] &&
      array[6] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (
      array[1] === array[number] &&
      array[4] === array[number] &&
      array[7] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (
      array[2] === array[number] &&
      array[5] === array[number] &&
      array[8] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (
      array[2] === array[number] &&
      array[4] === array[number] &&
      array[6] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (
      array[0] === array[number] &&
      array[4] === array[number] &&
      array[8] === array[number]
    ) {
      setValues({
        ...values,
        winMessage: array[number] ? "X won the game" : "O won the game",
      });
    } else if (drawGame()) {
      setValues({
        ...values,
        winMessage: "Game Drawn",
      });
    }
  };

  const drawGame = () => {
    return array.every((element) => element !== 0);
  };
  return (
    <LinearGradient
      colors={["#ba5370", "#f4e2d8"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      Locations={[0.2, 0.5, 0.8]}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => resetGame()} />
        }
      >
        <StatusBar style="auto" />
        <Text style={styles.text}>Tic Tac Toe</Text>
        <Text style={styles.bottomtext}>Game</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(0)}>
              <Entypo name={getIcon(0)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(1)}>
              <Entypo name={getIcon(1)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(2)}>
              <Entypo name={getIcon(2)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(3)}>
              <Entypo name={getIcon(3)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(4)}>
              <Entypo name={getIcon(4)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(5)}>
              <Entypo name={getIcon(5)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(6)}>
              <Entypo name={getIcon(6)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(7)}>
              <Entypo name={getIcon(7)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => changeMove(8)}>
              <Entypo name={getIcon(8)} size={100} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.winMessage}>{values.winMessage}</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: "#00B6FF",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  box: {
    borderWidth: 4,
    padding: 10,
    borderColor: "#fff",
  },
  text: {
    color: "#ba5370",
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: -20,
  },
  winMessage: {
    fontSize: 30,
    marginTop: 10,
    padding: 10,
    // color: "#61045f",
    color: "#fff",
  },
  bottomtext: {
    color: "#ba5370",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
