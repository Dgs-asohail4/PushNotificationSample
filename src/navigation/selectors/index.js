
// Selectors
export const getScene = (state) => ({
    scene : state.nav.scene
});


export const getTheme = (state) => ({
    theme : state.nav.theme
});

export const getStyles = (state) => ({
    globalStyles : state.splash.globalTheme
})