// Selectors
export const getTitle = (state) => ({
    title :state.title
});

export const getTheme = (state) => ({
    theme : state.nav.theme
});
export const getStyles = (state) => ({
    globalStyles : state.splash.globalTheme
});