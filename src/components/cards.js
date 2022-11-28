import React from "react"
import { Alert, View } from "react-native"
import { Text, Card, Button } from '@rneui/themed';
import { Feather } from '@expo/vector-icons';
import styles from '../styles';

export default function Cards () {

const onRemove = () => {
    Alert.alert('Remove');
}

const onSave = () => {
    Alert.alert('Save');
}

    return (
        <View style={styles.root}>
        <Card>
          <Card.Title>Diana García</Card.Title>
          <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{uri: 'https://img.freepik.com/premium-vector/african-american-woman-avatar-with-glasses-portrait-young-girl-vector-illustration-face_217290-363.jpg?w=2000'}}/>
        <Text style={{ marginBottom: 10 }}>
          I would love to develope a Startup company that help enterprenours to match with a great pair
        </Text>
        <Text style={styles.smallTitle}> Values </Text>
        <Text style={styles.smallText}> Respect, Commitment, Perseverance </Text>
        <Text style={styles.smallTitle}> Interests </Text>
        <Text style={styles.smallText}> Technology, Social Help, Startup </Text>
        <View style={styles.rowIcon}>
          <Feather
            name= 'x-circle' 
            size= {30} 
            color= 'red'
            onPress={onRemove}/>
          <Feather
            name= 'check-circle' 
            size= {30} 
            color= 'green'
            onPress={onSave}/>
        </View>
      </Card>

      <Card>
        <Card.Title>George Roberts</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{uri: 'https://static.vecteezy.com/system/resources/previews/004/476/164/original/young-man-avatar-character-icon-free-vector.jpg'}}/>
        <Text style={{ marginBottom: 10 }}>
          My dream is to have a company that help people to find a job
        </Text>
        <Text style={styles.smallTitle}> Values </Text>
        <Text style={styles.smallText}> Responsability, Equiality, Hardwork </Text>
        <Text style={styles.smallTitle}> Interests </Text>
        <Text style={styles.smallText}> Money, Networking, Investment </Text>
        <View style={styles.rowIcon}>
        <Feather
            name= 'x-circle' 
            size= {30} 
            color= 'red'
            onPress={onRemove}/>
          <Feather
            name= 'check-circle' 
            size= {30} 
            color= 'green'
            onPress={onSave}/>
        </View>
      </Card>

      <Card>
        <Card.Title>Alexander Aiken</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{uri: 'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'}}/>
        <Text style={{ marginBottom: 10 }}>
          Passionate about technology and innovation, I would like to create a company that improves the quality of life of people
        </Text>
        <Text style={styles.smallTitle}> Values </Text>
        <Text style={styles.smallText}> Hardwork, Trust, Team spirit  </Text>
        <Text style={styles.smallTitle}> Interests </Text>
        <Text style={styles.smallText}> innovation, Technology, App development </Text>
        <View style={styles.rowIcon}>
        <Feather
            name= 'x-circle' 
            size= {30} 
            color= 'red'
            onPress={onRemove}/>
          <Feather
            name= 'check-circle' 
            size= {30} 
            color= 'green'
            onPress={onSave}/>
        </View>
      </Card>

      <Card>
        <Card.Title>Mina Barrington</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{uri: 'https://as2.ftcdn.net/v2/jpg/02/79/66/93/1000_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg'}}/>
        <Text style={{ marginBottom: 10 }}>
          PropTech is the future! Looking forword to inmerse in the industry and create a company that helps people to find a home
        </Text>
        <Text style={styles.smallTitle}> Values </Text>
        <Text style={styles.smallText}> Honesty, Modesty, Freedom </Text>
        <Text style={styles.smallTitle}> Interests </Text>
        <Text style={styles.smallText}> PropTech, Real State, Technology </Text>
        <View style={styles.rowIcon}>
        <Feather
            name= 'x-circle' 
            size= {30} 
            color= 'red'
            onPress={onRemove}/>
          <Feather
            name= 'check-circle' 
            size= {30} 
            color= 'green'
            onPress={onSave}/>
        </View>
      </Card>

      <Card>
        <Card.Title>Christy Alex</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{uri: 'https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg'}}/>
        <Text style={{ marginBottom: 10 }}>
          Would love to create an app to help people have a perfect morning routine. That's the key to have a great day and accomplish your goals.
        </Text>
        <Text style={styles.smallTitle}> Values </Text>
        <Text style={styles.smallText}> Respect, Modesty, Freedom </Text>
        <Text style={styles.smallTitle}> Interests </Text>
        <Text style={styles.smallText}> Mindfullness, Nature, Technology </Text>
        <View style={styles.rowIcon}>
        <Feather
            name= 'x-circle' 
            size= {30} 
            color= 'red'
            onPress={onRemove}/>
          <Feather
            name= 'check-circle' 
            size= {30} 
            color= 'green'
            onPress={onSave}/>
        </View>
      </Card>
    </View>
    )
}