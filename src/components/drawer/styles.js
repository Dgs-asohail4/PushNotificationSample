import { StyleSheet, Platform } from 'react-native';


export default class StyleSheetFactory {
	static getSheet(theme) {
		return StyleSheet.create({
			container: {
				height: 80,
				paddingHorizontal: 16,
				borderTopWidth: StyleSheet.hairlineWidth,
				borderColor: theme.colors.border.base,
			  },
			header:{
				height: 80,
				paddingHorizontal: 16,
				borderTopWidth: StyleSheet.hairlineWidth,
				borderColor: theme.colors.border.base,
			},
			root: {
				paddingTop: Platform.OS === 'ios' ? 20 : 0,
				backgroundColor: theme.colors.screen.base,
			},
			content: {
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center',
			},
			icon: {
				marginRight: 13,
			},
			headerIcon:{
				marginRight: 13,

			}
		})
	}
}
