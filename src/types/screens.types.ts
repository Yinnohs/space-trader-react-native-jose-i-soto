import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type StackRoutes = {
    Home:undefined,
    Login:undefined,
    Register:undefined,
    Profile:undefined,
    Auth:undefined
}

export type ScreenProps<T extends keyof StackRoutes> = NativeStackScreenProps<StackRoutes, T>
