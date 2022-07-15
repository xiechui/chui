import v_cart from './v_cart'
import v_demo from './v_demo'
import v_row from './v_row'

const components = {
    v_cart,
    v_demo,
    v_row
}

const install = function(Vue) {
    if(install.installed) {
        return
    }
    Object.keys(components).forEach(key =>{
        Vue.component(components[key].name,components[key])
    })
}

const API = {
    install
}
export default API