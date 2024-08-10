import React, { useCallback, useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header/Header";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "../components/Icons";
import { Button } from "../components/Button";
import { RemoteImage } from "../components/RemoteImage";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";


export const DiaryListScreen = ()=> {

    const navigation = useNavigation();
    const safeAreaInset = useSafeAreaInsets();
    const width = useWindowDimensions();


    const onPressSetting = useCallback(()=>{
            navigation.navigate('Setting')
    },[]);
    
    const onPressAdd = useCallback(() => {
        navigation.navigate('AddDiary')
    },[])



    const [data, setData] = useState([
        {
            id:0,
            title:'TITLE_01',
            content: 'CONTENT_01',
            createdAt: '2024-08-10',
            updateAt:'2024-08-10',
            imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150914_113%2Fdageudark_14422142113001BP2u_JPEG%2F20150914_160247.jpg&type=sc960_832',
        },
        {
            id:1,
            title:'TITLE_02',
            content: 'CONTENT_02',
            createdAt: '2024-08-11',
            updateAt:'2024-08-11',
            imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110626_210%2Fyaho3448_1309083810808ol7Tc_JPEG%2F2011-06-26_18%253B51%253B57.jpg&type=sc960_832',
        },
        {
            id:2,
            title:'TITLE_03',
            content: 'CONTENT_03',
            createdAt: '2024-08-12',
            updateAt:'2024-08-12',
            imageUrl:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAxMzBfMTIx%2FMDAxNTE3MjkzNDg5MTI5.Dnup0-OmayXjsvtEe2-0Lz6qrj1XDcCs2EqD5L8kEeIg.48ppmVM9Bv0vFipd0bgNNSPxVmIO4jEffUjronJSqYMg.JPEG.dawon1203__%2F02-42-45-sw8bQv7pacSB8UlVM8lLGO8YSxrvSYE4x7RvQTJ6jxDOEqrUP7DtD48ElGm0B0l5kGA.jpg&type=sc960_832',
        },
    ]);

    return(
        <View style={{flex:1}} >
            <View style={{flex:1}}>
                <Header>
                    <Header.Group>
                        <Header.Title title='DIARY LIST'></Header.Title>
                    </Header.Group>

                    <Header.Icon iconName='setting' onPress={onPressSetting}></Header.Icon>
                </Header>

                <FlatList
                    data={data}
                    contentContainerStyle={{
                        paddingHorizontal:24,
                        paddingVertical:32,
                         
                    }}
                    renderItem={({item}) => {
                       
                        return (
                            <Button onPress={() => {
                                navigation.navigate('DiaryDetail', {item})
                            }}>
                                    <View style={{paddingVertical:12}}>
                                        {item.imageUrl !== null && (
                                            <>
                                                <RemoteImage
                                                        url={item.imageUrl}
                                                        width={300}
                                                        height={150} // corrected typo
                                                        style={{ borderRadius: 8 }}
                                                />
                                                <Spacer space={4}/>
                                            </>
                                        )} 
                                        <View style={{flexDirection:'row', justifyContent:'space-between' }}>
                                            <View>
                                                <Typography fontSize={18}>{item.title}</Typography>
                                                <Spacer space={2}/>
                                                <Typography fontSize = {12}>{item.content}</Typography>
                                            </View>
                                                <Typography fontSize = {12}>{item.updateAt}</Typography>
                                        </View>
                                    </View>
                            </Button>
                        )
                    }}
                />
            </View>
            <View style={{position:"absolute", right:12, bottom:safeAreaInset.bottom + 24}}>
                <Button onPress={onPressAdd}>
                    <View style={{
                        width:60, 
                        height:60, 
                        borderRadius:30, 
                        backgroundColor:'black', 
                        alignItems:'center', 
                        justifyContent:'center'
                    }}>
                        <Icon iconName='add' color='white' size={30}/>       

                    </View>
                </Button>

            </View>
        </View>
    )
}