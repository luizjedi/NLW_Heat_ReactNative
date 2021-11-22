import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message';
import { styles } from './styles';

export function MessageList() {
    const message = {
        id: '1',
        text: 'Mensagem Teste',
        user: {
            name: 'Luiz Jedi',
            avatar_url: 'https://github.com/luizjedi.png',
        }
    }
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="never">
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
        </ScrollView>
    );
}