import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMonster } from '../redux/monsterSlice'; 
import { addMonster as addMonsterToAPI } from '../monsterApi'; 
import imageMapping from '../utils/imgaMapping';
import ButtonNavigate from '../components/Button';

const availableImages = Object.keys(imageMapping); 

const AddMonster = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [eyes, setEyes] = useState('');
  const [image, setImage] = useState('');

  const handleAddMonster = async () => {
    const newMonster = {
      name,
      color,
      eyes: parseInt(eyes, 10),
      image, 
    };

    try {
      const addedMonster = await addMonsterToAPI(newMonster);
      dispatch(addMonster(addedMonster));

      Alert.alert('Monster tillagt!');
      setName('');
      setColor('');
      setEyes('');
      setImage('');
    } catch (error) {
      Alert.alert('Något gick fel vid tillägg av monster.');
      console.error('Error adding monster:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtimg}>Fyll i fälten och välj monster bild</Text>
      <TextInput
        style={styles.input}
        placeholder="Namn"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Färg"
        value={color}
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Antal ögon"
        value={eyes}
        keyboardType="numeric"
        onChangeText={setEyes}
      />
      
        <Text style={styles.txtimg}>Skrolla åt höger i bilderna för att se fler monster.. ➡️➡️</Text>
      <ScrollView horizontal style={styles.imageSelector}>
        {availableImages.map((imageName) => (
          <TouchableOpacity key={imageName} onPress={() => setImage(imageName)}>
            <Image source={imageMapping[imageName]} style={styles.images} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {image && <Image source={imageMapping[image]} style={styles.selectedImage} />}
      
      <ButtonNavigate title="Lägg till Monster" navigate={handleAddMonster} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  imageSelector: {
    marginBottom: 20,
    marginTop: 50
  },
  images: {
    width: 120,
    height: 120,
    marginRight: 10,
    // resizeMode: 'contain',
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 40,
    // resizeMode: 'contain',
  },
  txtimg:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default AddMonster;
