import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import { editEmail, editSenha } from './actions/AuthActions';

export class Home extends React.Component {

    static navigationOptions = {
        title: null,
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {}

    }

    cadastrar = () => {
        this.props.navigation.navigate('Login');
    }
    logar = () => {
        this.props.navigation.navigate('Cadastrar');
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 22 , marginBottom:10 }}> {this.props.titulo} </Text>
                </View>

                <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={this.cadastrar}>
                    <Text style={styles.btnTxt}>Fazer Login</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={this.logar}>
                    <Text style={styles.btnTxt}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 23,
        fontWeight: 'bold'
    },
    botao: {
        backgroundColor: '#FF0000',
        padding: 8,
        width: 250,
        borderRadius: 3,
        marginBottom: 5,
    }
});

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        senha: state.auth.senha,
        titulo:state.style.titulo
    };
};

//Constate fazendo um merge de duas funções

const LoginConnect = connect(mapStateToProps, { editEmail })(Home);

export default LoginConnect;
