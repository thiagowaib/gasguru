/* Copyright (C) 2021  Thiago Waib C. Branco */
import { Text, VStack, KeyboardAvoidingView, ScrollView, Divider, Pressable, Box, HStack,  } from 'native-base'
import React, {useState, useEffect} from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { EtaPrec, GasPrec } from '../../components/Input';

const PageComp = () => {

    const navigation = useNavigation();

    const [gasPrec, setGasPrec] = useState(0.0)
    const [etaPrec, setEtaPrec] = useState(0.0)
    const [compensa, setCompensa] = useState(0)
    // 0: Dados Nulos
    // 1: Gasolina
    // 2: Etanol

    useEffect(()=>{
        if(etaPrec!==0 && gasPrec!==0)
        {
            if(etaPrec >= (gasPrec*0.73))
                setCompensa(1)
            else
                setCompensa(2)
        }else{setCompensa(0)}
    }, [gasPrec, etaPrec])

    const handleReturn = () => {
        navigation.goBack()
    }

    
    return (
        <VStack
        safeAreaBottom
        safeAreaLeft
        safeAreaRight
        bg={"#1D191C"}
        flex={1}
        shadow={9}
        px={5}
        pb={5}
        >
            <KeyboardAvoidingView>
            <ScrollView >
            <VStack
            mt={"45px"}
            >
                <Pressable
                w={"15%"}
                p={2}
                onPress={handleReturn}
                ml={-2.5}
                >
                    <Entypo 
                    name="chevron-thin-left" 
                    size={32} 
                    color="#fff"
                    
                    />
                </Pressable>
                <Text
                color={"#fff"}
                fontSize={34}
                >Qual combustível</Text>
                <Text
                fontSize={24}
                color={"rgba(255,255,255,0.8)"}
                lineHeight={30}
                >
               vale a pena abastecer?
                </Text>
            </VStack>

            <Divider
            thickness={1}
            bg={"rgba(58, 50, 56, 0.5)"}
            mt={25}
            mb={25}
            />
            <VStack>
                <GasPrec callback={(v)=>setGasPrec(parseFloat(v)?parseFloat(v):0.0)}/>
                <HStack 
                alignItems={"center"} 
                justifyContent={"center"}
                my={5}>
                    <Divider
                    thickness={1}
                    width={"50px"}
                    mt={1}
                    bg={"rgba(58, 50, 56, 1)"}
                    />
                    <Text
                    color={"rgba(58, 50, 56, 1)"}
                    fontSize={16}
                    px={1}
                    fontStyle={"italic"}
                    >vs</Text>
                    <Divider
                    thickness={1}
                    width={"50px"}
                    mt={1}
                    bg={"rgba(58, 50, 56, 1)"}
                    />
                </HStack>
                <EtaPrec callback={(v)=>setEtaPrec(parseFloat(v)?parseFloat(v):0.0)}/>

                {compensa===0?(
                <>
                <Text
                color={"#ffffff80"}
                fontSize={16}
                alignSelf={"center"}
                textAlign={"center"}
                mt={10}
                >
                    Preencha os campos acima{"\n"}com o preço dos combustíveis
                </Text>
                </>
                ):(
                <>
                <Text
                color={"#fff"}
                fontSize={24}
                alignSelf={"center"}
                mt={10}
                >
                    Compensa abastecer com
                </Text>
                <Text
                fontSize={28}
                alignSelf={"center"}
                fontWeight={700}
                letterSpacing={0.5}
                color={compensa===1?"#F3D797":
                compensa===2?"#D8F589":null}
                >
                    {compensa===1?"Gasolina":
                    compensa===2?"Etanol":null}
                </Text>
                </>
                )}
                
            </VStack>
            </ScrollView>
            </KeyboardAvoidingView>
        </VStack>
    )
}

export default PageComp
