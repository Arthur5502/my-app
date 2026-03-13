import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [name, setName] = useState('');
  const [useSecondaryImage, setUseSecondaryImage] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const image1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop';
  const image2 = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=256&auto=format&fit=crop';

  const currentImage = useSecondaryImage ? image2 : image1;

  const handleSave = () => {
    if (name.trim() === '') {
      setModalMessage('Por favor, insira um nome.');
    } else {
      setModalMessage(`Perfil Salvo com sucesso!\nNome: ${name}`);
    }
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: currentImage }}
        style={styles.profileImage}
        resizeMode="cover"
      />

      <TouchableOpacity style={styles.toggleButton} onPress={() => setUseSecondaryImage(!useSecondaryImage)}>
        <Text style={styles.toggleButtonText}>Trocar Foto</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>

            {/* Fundo Metade Azul (Base) */}
            <View style={[styles.solidBackground, { backgroundColor: '#C0E4FF', top: 0 }]} />

            {/* Texto da Mensagem */}
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{modalMessage}</Text>
            </View>

            {/* Divisor do meio */}
            <View style={styles.divider} />

            {/* Botão de Fechar do Modal */}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  toggleButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 40,
  },
  toggleButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  saveButton: {
    width: '100%',
    backgroundColor: '#28A745',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 300,
    backgroundColor: '#F2F2F2',
    borderRadius: 18,
    overflow: 'hidden',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
  solidBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  modalContent: {
    paddingTop: 35,
    paddingBottom: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    zIndex: 1,
  },
  modalText: {
    fontSize: 17,
    color: '#000',
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#C6C6C8',
    zIndex: 2,
  },
  modalCloseButton: {
    width: '100%',
    paddingVertical: 14,
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: 'transparent',
  },
  modalCloseButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#007AFF',
  },
});