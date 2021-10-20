import { Box } from 'native-base'
import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'

export const GasPrec = ({callback}) => {
    const [prec, setPrec] = useState("")
    const handleChange = (value) => {
        setPrec(value)
        callback(value.replace(",","."))
    }
    return (
        <Box>
            <FloatingLabelInput
            label={"Preço da Gasolina"}
            keyboardType={"numeric"}
            value={prec}
            onChangeText={(v)=>handleChange(v)}
            maxLength={6}
            containerStyles = {{
                backgroundColor: "#211D20",
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#F3D797",
                paddingHorizontal: 10,
                paddingTop: 5,
            }}
            customLabelStyles = {{
                colorFocused: "#F3D79780",
                colorBlurred: "#F3D797A0",
                fontSizeBlurred: 18,
                fontSizeFocused: 12,
            }}
            inputStyles = {{
            color: "#fff",
            fontSize: 16,
            paddingTop: 2,
            paddingBottom: -5,
            }}
            />
        </Box>
    )
}

export const EtaPrec = ({callback}) => {
    const [prec, setPrec] = useState("")
    const handleChange = (value) => {
        setPrec(value)
        callback(value)
    }
    return (
        <Box>
            <FloatingLabelInput
            label={"Preço do Etanol"}
            keyboardType={"numeric"}
            value={prec}
            onChangeText={(v)=>handleChange(v)}
            maxLength={6}
            containerStyles = {{
                backgroundColor: "#211D20",
                height: 60,
                borderRadius: 5,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#D8F589",
                paddingHorizontal: 10,
                paddingTop: 5,
            }}
            customLabelStyles = {{
                colorFocused: "#D8F58980",
                colorBlurred: "#D8F589A0",
                fontSizeBlurred: 18,
                fontSizeFocused: 12,
            }}
            inputStyles = {{
            color: "#fff",
            fontSize: 16,
            paddingTop: 2,
            paddingBottom: -5,
            }}
            />
        </Box>
    )
}
