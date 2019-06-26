import React from "react";
import {Text,View} from "react-native";
import styles from "./styles";

const Title = props => <Text style={styles.textContainer}>{props.title}</Text>

export default Title;