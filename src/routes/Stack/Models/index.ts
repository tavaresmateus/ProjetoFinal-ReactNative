import {NativeStackNavigationProp} from "@react-navigation/native-stack"

export type propsNavigationStack = {
    Home: {
        name: string,
    },
    
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>