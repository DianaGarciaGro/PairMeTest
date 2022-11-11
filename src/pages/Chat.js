import { StyleSheet, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { ref, onValue,} from'firebase/database';
import { ListItem } from '@rneui/base';
import { db } from '../config/firebase';
import { DialogLoading } from '@rneui/base/dist/Dialog/Dialog.Loading';
import Search from '../components/SearchBar';

export default function Chat({navigation}) {

  const [indexes, setIndexes] = useState([]);
  const [filtering, setFiltering] = useState('');

    useEffect(() => {
        onValue(ref(db, 'chats/'), (snapshot) => {
          const data = snapshot.val();
          if(!data) {
          setIndexes([]);    
          }else{
            setIndexes(Object.keys(data));
          }
        })
    }, []);

      const filtered = indexes.filter((item)  => {
        return (Object.values(item).join('').toLowerCase().includes(filtering.toLocaleLowerCase()))})

    
      const renderItem = ({ item, index }) => {
        return (
          
          <View>
            <ListItem containerStyle={{backgroundColor:'#EAF6F6'}} underlayColor={'#150050'} topDivider  onPress={() => navigation.navigate('Chat Room', { data: item })} hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>

              <ListItem.Content>
                {item == "General" || item == "Paranormal" ?
                  <ListItem.Title style={{ fontWeight: "bold", fontSize: 20 }}>{item}</ListItem.Title> :
                  <ListItem.Title>{item}</ListItem.Title>}
              </ListItem.Content>
              <ListItem.Chevron />

            </ListItem>
          </View>);
      }       

    return(
        <View style={{paddingTop:20, flex: 1, backgroundColor:'white'}}>

        <Search/>

        <View style={{flex:1}}>
          {indexes=='' &&(<DialogLoading/>)}

        <FlatList
            data={filtered}
            renderItem={renderItem}
            keyExtractor={( index) => index.toString()}/>
        </View>
      </View>
    )
}

