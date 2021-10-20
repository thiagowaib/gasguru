import { HStack, VStack, Text, Pressable } from 'native-base'
import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";

import { Ionicons, Octicons } from '@expo/vector-icons';

const BottomTab = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(0)

    const handleMenu = () => {
        setSelected(0)
        navigation.navigate("Menu")
    }
    const handleConfig = () => {
        setSelected(1)
        navigation.navigate("Config")
    }
    return (
        <HStack 
        safeAreaBottom
        safeAreaLeft
        safeAreaRight
        bg={"#AD8423"}
        justifyContent={"space-evenly"}
        pb={2}
        px={5}
        >
            <Pressable onPress={handleMenu}>
            <VStack
            alignItems={"center"}
            >
                <Ionicons name="menu" 
                size={24} 
                color={selected===0?"#000":"#3A3238"}
                />
                <Text
                px={2}
                mt={-1}
                color={selected===0?"#000":"#3A3238"}
                >Menu</Text>
            </VStack>
            </Pressable>
            <Pressable onPress={handleConfig}>
            <VStack
            alignItems={"center"}
            >
                <Octicons name="gear" 
                size={24} 
                color={selected===1?"#000":"#3A3238"} 
                />
                <Text
                mt={-1}
                color={selected===1?"#000":"#3A3238"}
                >Configurações</Text>
            </VStack>
            </Pressable>
        </HStack>
    )
}

export default BottomTab
