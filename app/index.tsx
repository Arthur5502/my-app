import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [name, setName] = useState('');
  const [useSecondaryImage, setUseSecondaryImage] = useState(false);

  const image1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop';
  const image2 = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=256&auto=format&fit=crop';

  const currentImage = useSecondaryImage ? image2 : image1;

  const handleSave = () => {
    if (name.trim() === '') {
      Alert.alert('Por favor, insira um nome.');
    } else {
      Alert.alert('Perfil Salvo com sucesso!', `Nome: ${name}`);
    }
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
});