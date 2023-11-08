let PokeDex = (props) =>{
    const{mouseOn, setMouseOn} = props;


    return(
       <>
            {!mouseOn && (
                <div className="my-list">
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                    <h1>Pokemon</h1>
                 </div>
            )}
            {mouseOn &&(
                <div className="my-list">
                    <h1>Pokemon Stats</h1>
                </div>

            )}
        </>

    )
}

export default PokeDex