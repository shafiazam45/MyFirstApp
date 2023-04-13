import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const OurButton = () => {
    return ( <
        View >
        <
        Text style = { styles.textStyle } > Buttons < /Text><Button title=" GOOGLE "
        onPress = {
            () => {
                console.log("Hello World!");
            }
        }
        /> < /
        View >
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 200,
        textAlign: "center",
        fontSize: 20,
    },
});

export default OurButton;