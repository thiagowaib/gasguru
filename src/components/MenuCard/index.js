import { Box, HStack, Text } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'

const MenuCard = ({icon, text, action}) => {
    return (
        <HStack 
        alignSelf={"center"}
        bg={"#211D20"}
        w={"100%"}
        borderWidth={2}
        borderColor={"#AD842330"}
        shadow={9}
        mb={25}
        borderRadius={5}
        >
            <Pressable
            onPress={action}
            w={"100%"}
            h={"100%"}
            flex={1}
            >
                <Box
                w={"100%"}
                h={"100%"}
                py={5}
                flexDirection={"row"}
                borderWidth={1}
                borderColor={"#AD842340"}
                borderRadius={2}
                >
                    
                    <Box
                    ml={6}
                    >
                    {icon}
                    </Box>
                    <Text 
                    ml={5}
                    color={"#fff"}
                    fontSize={16}
                    >
                        {text}
                    </Text>
                </Box>
            </Pressable>
        </HStack>
    )
}

export default MenuCard
