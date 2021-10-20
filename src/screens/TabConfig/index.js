import { Text, VStack, ScrollView, KeyboardAvoidingView, Box, Center } from 'native-base'
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
            >
                <ScrollView>
                <KeyboardAvoidingView>

                <Center mt={50}>
                    <Text color={"#fff"} fontSize={30}>Tela de CONFIGURAÇÃO</Text>
                </Center>
                
                </KeyboardAvoidingView>
                </ScrollView>
            </VStack>
        </Box>
    )
}

export default TabConfig
