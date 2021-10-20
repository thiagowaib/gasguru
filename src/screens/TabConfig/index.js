import { Text, VStack, ScrollView, KeyboardAvoidingView, Box, Divider, Pressable, Link } from 'native-base'
import React from 'react'

const TabConfig = () => {
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
            >
                <ScrollView>
                <KeyboardAvoidingView>

                <VStack>
                    <Text
                    color={"#fff"}
                    fontSize={36}
                    mt={"55px"}
                    >Configurações</Text>
                    <Text
                    fontSize={16}
                    color={"rgba(255,255,255,0.8)"}
                    mt={3}
                    lineHeight={20}
                    >
                    Essa tela está em construção ainda ⚠️
                    </Text>
                </VStack>

                <Divider
                thickness={1}
                bg={"rgba(58, 50, 56, 0.5)"}
                mt={25}
                mb={25}
                />
                
                <Text
                fontSize={16}
                color={"rgba(255,255,255,0.8)"}
                mt={3}
                lineHeight={22}
                alignSelf={"center"}
                textAlign={"center"}
                >
                Para mais informações sobre o projeto,{"\n"}
                acesse nosso repositório do Github {":)"}
                </Text>
                <Link
                bg={"#E6AF2E"}
                w={"50%"}
                borderRadius={5}
                mt={5}
                alignSelf={"center"}
                shadow={9}
                borderColor={"#ffffff40"}
                borderWidth={1}
                alignContent={"center"}
                href={"https://github.com/thiagowaib/gasguru"}
                >
                    <Text
                    fontSize={16}
                    color={"#000"}
                    lineHeight={20}
                    textAlign={"center"}
                    p={2}
                    >
                    Quero ir para lá!
                    </Text>
                </Link>
                </KeyboardAvoidingView>
                </ScrollView>
            </VStack>
        </Box>
    )
}

export default TabConfig
