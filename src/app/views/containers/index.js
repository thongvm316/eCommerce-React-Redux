import { connect } from 'react-redux'
import App from '../components/index'
import { saveCart } from '../../lib/actions'

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onUpdateCart: (item, quantity) => dispatch(updateCart(item, quantity))
        saveLocalStorage:  items => { dispatch(saveCart(items)) } 
    } 
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


