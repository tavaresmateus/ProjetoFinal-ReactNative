import {NativeStackNavigationProp} from "@react-navigation/native-stack"

export type propsNavigationAuthStack = {
    Explore: undefined,
    Login?: undefined,
    Register: undefined
}

export type propsAuthStack = NativeStackNavigationProp<propsNavigationAuthStack>