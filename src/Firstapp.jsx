
//OJO!!!! si es una Fn async (la cual devuelve una promesa, lo que significa-> un objeto), esto dará error!

export const Firstapp = ({saludo}) => {
    // const getSaludo = (saludo) =>{
    //     return saludo
    // }
    return (
        <>
            <div>{saludo}</div>
            <h1>FirstApp titulo</h1>
        </>
    )
}
