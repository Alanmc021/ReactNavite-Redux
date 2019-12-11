import React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

import { connect } from 'react-redux';

import { editEmail, editSenha } from './actions/AuthActions';

export class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.nomeInput}>Email:</Text>

                <TextInput value={this.props.email}
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    onChangeText={(texto) => this.props.editEmail(texto)}

                />

                <Text style={styles.nomeInput}>Senha:</Text>

                <TextInput value={0}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(texto) => this.props.editSenha(texto)}
                />

                <Button title="Entrar" onPress={this.entrar} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nomeInput: {
        color: '#000000',
        fontSize: 24,
        marginBottom: 5
    },
    input: {
        color: '#000000',
        height: 40,
        backgroundColor: '#CCCCCC',
        padding: 5,
        width: 250,
        marginBottom: 10
    }
});

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        senha: state.auth.senha
    };
};

//Constate fazendo um merge de duas funções

const LoginConnect = connect(mapStateToProps, { editEmail })(Login);

export default LoginConnect;
