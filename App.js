import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = { showAlert: false };
    }

    handleClick(){
        this.setState({showAlert: !this.state.showAlert});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu. Slava.</Text>
                <Button title="Click me" onPress={this.handleClick.bind(this)} />
                { (this.state.showAlert) ? <Text>State active</Text> : <Text>State inactive</Text> }


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
