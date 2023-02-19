import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type StackRoutes = {
    Home:undefined,
    Login:undefined,
    Register:undefined,
    Loans:undefined,
    Auth:undefined,
    Logout:undefined,
    Ships:undefined
}

export type ScreenProps<T extends keyof StackRoutes> = NativeStackScreenProps<StackRoutes, T>
