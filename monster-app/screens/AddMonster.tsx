import React, { useState } from 'react';
import { Text, TextInput, Button, Alert, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
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
    if(!name.trim() || !color.trim() || !eyes || isNaN(parseInt(eyes, 10)) || !image){
      Alert.alert("fyll i alla fält")
      return
    }
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
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginTop: 20 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 20
  },
  imageSelector: {
    marginBottom: 40,
    marginTop: 40
  },
  images: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  selectedImage: {
    width: 150,
    height: 150,
    flex: 1,
   alignSelf: "center"
  },
  txtimg:{
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  }
});

export default AddMonster;
