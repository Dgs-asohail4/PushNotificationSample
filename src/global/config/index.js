export const USER_KEY = 'USER_KEY'
export const DEFUALT_THEME = "DefaultTheme"
export const DARK_THEME = "DarkTheme"

import {Platform } from 'react-native'

export class UIConstants {
    static AppbarHeight = Platform.OS === 'ios' ? 65 : 56;
    static StatusbarHeight = Platform.OS === 'ios' ? 20 : 0;
    static HeaderHeight = UIConstants.AppbarHeight + UIConstants.StatusbarHeight;
}