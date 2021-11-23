import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';
import { api } from '../../Services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    async function handleMessageSubmit() {
        const messageFormatted = message.trim();

        if (messageFormatted.length > 0) {
            setSendingMessage(true);
            await api.post('/messages', { message: messageFormatted });

            setMessage('');
            Keyboard.dismiss();
            setSendingMessage(false);
            Alert.alert('Mensagen enviada com sucesso!');

        } else {
            Alert.alert('Escreva a mensagem para enviar.');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                keyboardAppearance='dark'
                placeholder='Qual sua expectativa deste app?'
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={150}
                onChangeText={setMessage}
                value={message}
                style={styles.input}
                editable={!sendingMessage}
            />
            <Button
                title='Enviar Mensagem'
                color={COLORS.WHITE}
                backgroundColor={COLORS.PINK}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />
        </View>
    );
}