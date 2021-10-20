import React, {useState, useEffect} from 'react'
import { Text, VStack, ScrollView, KeyboardAvoidingView, Box, Divider } from 'native-base'
import { useNavigation } from "@react-navigation/native";


import MenuCard from '../../components/MenuCard'
import { FontAwesome } from '@expo/vector-icons';

const TabMenu = () => {

    const [timePeriod, setTimePeriod] = useState(1)
    // 1-Dia, 2-Tarde, 3-Noite

    const navigation = useNavigation();

    useEffect(()=>{
        const time = parseInt(new Date().toLocaleTimeString("pt-BR").split(":")[0])
        if(time>=6 && time<12)
            setTimePeriod(1)
        else if(time>=12 && time<18)
            setTimePeriod(2)
        else if(time>=18 || time<6)
            setTimePeriod(3)
    }, [])

    const handleNav = (route) => {
        navigation.navigate(`${route}`)
    }

    return (
        <Box
        flex={1}
        bg={"#AD8423"}
        >
            <VStack
            safeAreaBottom
            safeAreaLeft
            safeAreaRight
            bg={"#1D191C"}
            flex={1}
            mb={5}
            borderBottomLeftRadius={15}
            borderBottomRightRadius={15}
            shadow={9}
            px={5}
            pb={5}
            >
                
                <KeyboardAvoidingView>
                <VStack>
                    <Text
                    color={"#fff"}
                    fontSize={36}
                    mt={"55px"}
                    >{
                    timePeriod===1?"Bom dia,":
                    timePeriod===2?"Boa tarde,":
                    timePeriod===3?"Boa noite,":
                    null}</Text>
                    <Text
                    fontSize={16}
                    color={"rgba(255,255,255,0.8)"}
                    mt={3}
                    lineHeight={20}
                    >
                    selecione  no menu abaixo{"\n"}
                    a informação que você está buscando.
                    </Text>
                </VStack>

                <Divider
                thickness={1}
                bg={"rgba(58, 50, 56, 0.5)"}
                mt={25}
                mb={25}
                />
                <VStack h={"72%"}>
                    <ScrollView >
                        <MenuCard
                        icon={<FontAwesome name="dollar" size={22} color={"#fff"} />}
                        text={"Qual combustível vale a pena?"}
                        action={()=>handleNav("PageComp")}
                        />

                    </ScrollView>
                </VStack>

                </KeyboardAvoidingView>
            </VStack>
        </Box>
    )
}

export default TabMenu
