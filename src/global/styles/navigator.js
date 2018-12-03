
import {COLOR_PRIMARY, TEXT_COLOR_PRIMARY, NAVBAR_FONT_SIZE} from '../theme/default';

export const navigatorStyle = (text, visible = true, stack = true) => ({
	title:{
		color : TEXT_COLOR_PRIMARY,
		fontSize : NAVBAR_FONT_SIZE,
		text:text,
		visible:true
	},
	background:{
		color:COLOR_PRIMARY,
	},
	leftButtons: stack ? [{
		id: 'drawer',
		component: {
		  name: 'global.drawerButton',
		  visible:true
		},
		enabled: true,
		visible:true,
		color: TEXT_COLOR_PRIMARY,
		disabledColor: 'black',
		testID: 'buttonOneTestID'
	  }
	]:null,
	backButton: stack ? null:{
		color: TEXT_COLOR_PRIMARY,
		title:'back'
	},
	statusBar: {
		style: 'light',
		color:COLOR_PRIMARY
	},
	subtitle:{
		color:TEXT_COLOR_PRIMARY
	},
	visible
});
