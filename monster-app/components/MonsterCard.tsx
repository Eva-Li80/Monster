import * as React from "react";
import { Button, Card, Text ,} from "react-native-paper";
import { StyleSheet } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

type MonsterCardProps = {
  img: any;
  title: string;
  color: string;
  eyes: number;
};

const MonsterCard = ({ img, title, color, eyes }: MonsterCardProps) => (
  <>
    <Card style={styles.card}>
      <Card.Title title={title} />
      <Card.Cover style={styles.image} source={img} />
      <Card.Content>
        <Text variant="bodyMedium">{title} har {color} färg</Text>
        <Text variant="bodyMedium">{` & ${eyes === 1 ? "1  öga" : `${eyes} stycken ögon`}`}</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Se fler saker om mig</Button>
      </Card.Actions>
    </Card>
  </>
);

export default MonsterCard;
const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    padding: 20
   
  },
  image: {
    width:  200,
    height: 200, 
  },
});

