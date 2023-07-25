// props ==> properties son las propiedades que le pasamos al component (Fn), esto es un objeto. para evitar tener que escribir props.loquesea... tenemos que desestructurar la props {loquesea} 
//las props vienen del component padre (main.jsx) al componente hijo (reactapp.jsx)
import PropTypes from 'prop-types'

export const ReactApp = ({title, subtitle, name}) => {

    // console.log(props);
    
    return (
        <>
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <p>{ name }</p>
        </>
    )
}
//definir propiedades por defecto:
ReactApp.defaultProps = {
    title: 'no hay titulo',
    subtitle: 'no hay subtitulo',
    name: 'Noelia'
}
//entran antes que los propsTypes
//manejar los tipos y otras condiciones (el prop-types se debe instalar!!) Al usar typescript no es necesario
ReactApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}
