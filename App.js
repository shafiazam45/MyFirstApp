import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OurButton from "./Button/OurButton";

export default function App() {
    return ( <
        View style = { styles.container } >
        <
        OurButton / >
        <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});