
// Selectors
export const getTitle = (state) => ({
    title :state.title
});


export const getPayload = (state) => ({
    payload: state.login.payload
});

export const getTheme = (state)=>({
    theme:state.nav.theme
});

export const getStyles =(state)=>({
    globalStyles :state.splash.globalTheme
});