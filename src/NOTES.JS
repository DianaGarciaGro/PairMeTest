export default function GetStarted3({navigation}) {

    const [ProfilePicture, setProfilePicture] = useState([]);

    const [Masters, setMasters] = useState('');
    const [PhD, setPhD] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('Title');

    return (
        <View styles ={styles.root}>
            <ScrollView style={[styles.scrollView, {marginTop:40}]}>
            
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={[styles.Normal, {fontWeight: 'bold'}]}> Birthday: </Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.Normal}> I am a... </Text>
                {/*<Picker
                    selectedGender={selectedGender}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}>
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Male" value="Male" />
                </Picker>*/}
            </View>

                <Text style={[styles.Normal, {fontWeight: 'bold'}]}> Add profile picture... </Text>

                <Text style={[styles.Normal, {fontWeight: 'bold'}]}> I am from... </Text>
                <View style={{left: 16}}>
                <CustomInput
                    placeholder="Country"
                    value={Country}
                    setValue={setCountry}/>
                </View>

                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold'}]}
                    onPress={() => navigation.navigate('GetStarted2')}>Next → </Text>
                {/*<AntDesign
                        name='arrowright'
                        size={30}
                        color="#5481b8"
                onPress={() => navigation.navigate('GetStarted2')}/>*/}
                </View>

            <Text style={styles.Title}> What about your background? </Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.Normal}> Current Title </Text>
            </View>

            <Text style={styles.Normal}> What's your bachelor: </Text>
            <View style={{left: 16}}>
            <CustomInput
                placeholder="Bachelor's degree"
                value={Bachelors}
                setValue={setBachelors}/>
            </View>

            <Text style={styles.Normal}> What's your masters: </Text>
            <View style={{left: 16}}>
            <CustomInput
                placeholder="Master's degree"
                value={Masters}
                setValue={setMasters}/>
            </View>

            <Text style={styles.Normal}> What's your PhD: </Text>
            <View style={{left: 16}}>
            <CustomInput
                placeholder="PhD"
                value={PhD}
                setValue={setPhD}/>
            </View>

            <Text style={styles.Title}> I would like to be pair with: </Text>
            <Text style={styles.Normal}> Someone with: </Text>
            <Text style={styles.Normal}> From... </Text>
            <Text style={styles.Normal}> Checklist for 'My home country' </Text>

            
            <View style={{flexDirection:'row', justifyContent: 'space-between'}} >
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', padding: 10}]}
                    onPress={() => navigation.navigate('GetStarted1')}
                    >← Back</Text>
                <Text 
                    style={[styles.Normal, {fontWeight: 'bold', paddingEnd: 20}]}
                    onPress={() => navigation.navigate('Home')}>Next →</Text>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 10
    },
    Title: {
        color: '#5481b8', 
        fontSize: 25, 
        fontWeight: 'bold',
        padding: 10
    },
    Normal: {
        color: '#5481b8',
        fontSize: 18,
        marginTop: 20,
        left: 10,
    },
});