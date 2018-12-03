import TextStyleFactory from './textStyle'
import ButtonStyleFactory from './buttonStyle'
import ModalStyleFactory from './modal'
import TextInputStyleFactory from './inputStyle'

import Theme from '../theme'

const globalStyles = (theme) => ({
    textStyle: TextStyleFactory.getSheet(Theme[theme]),
    buttonStyle: ButtonStyleFactory.getSheet(Theme[theme]),
    modalStyle: ModalStyleFactory(Theme[theme]),
    textInputStyle : TextInputStyleFactory(Theme[theme])
})


export default globalStyles