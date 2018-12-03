
import {StyleSheet} from 'react-native'
import {scale,scaleVertical} from '../../utils/scale'

const getBasic = (theme) => ({
    basic:{
        img: {
            margin: 1.5,
        },
        modal: {
            backgroundColor: theme.colors.screen.base,
        },
        footer: {
            backgroundColor: theme.colors.screen.base,
            height: 50,
        },
        header: {
            backgroundColor: theme.colors.screen.base,
            paddingBottom: 6,
        },
    }

});

const getBlog = (theme) => ({
    blog:{
        header: {
            paddingHorizontal: 16,
            paddingVertical: 0,
            paddingTop: 16,
        },
        content: {
            padding: 0,
            paddingVertical: 0,
            paddingTop: 12,
        },
        footer: {
            paddingHorizontal: 16,
            paddingTop: 15,
            paddingBottom: 16,
            alignItems: 'center',
        }
    }
});

const getHorizontal = (theme) => ({
    horizontal: {
        container2: {
            flexDirection: 'row',
            height: 110,
          },
        content: {
            flex: 1,
        },
        img: {
            height: null,
            flex: -1,
            width: 120,
        }
    }

})
const getCredit=(theme)=>({
    container: {
        borderWidth: 0,
        borderRadius: 7,
      },
      header: {
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        alignItems: 'center',
        paddingBottom: scaleVertical(46),
      },
      content: {
        alignItems: 'center',
        paddingVertical: 0,
      },
      footer: {
        paddingBottom: scaleVertical(14),
        paddingTop: scaleVertical(16),
        paddingHorizontal: 14,
        alignItems: 'flex-end',
      },
})
const getArticle=(theme) =>({
    article:{
        container: {
            borderWidth: 0,
            backgroundColor: 'transparent',
        },
        header: {
            paddingVertical: 0,
            paddingTop: 20,
            paddingBottom: 16,
            justifyContent: 'space-between',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderColor: theme.colors.border.base,
        },
        content: {
            padding: 16,
            borderBottomWidth: 1,
            borderColor: theme.colors.border.base,
        },
        footer: {
            paddingHorizontal: 14,
            paddingTop: 15,
            paddingBottom: 16,
            alignItems: 'center',
        },
    }
});

const getModalStyles = (theme) => ({
    ...getBasic(theme),
    ...getBlog(theme),
    ...getHorizontal(theme),
    ...getArticle(theme),
    ...getCredit(theme)
});

export default getModalStyles;