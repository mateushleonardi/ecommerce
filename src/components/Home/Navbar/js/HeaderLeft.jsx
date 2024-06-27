
export function HeaderLeft(props){
    return(
        <div className="Home">
            <header className="App-header">
                <div className='Header-left'>
                    <h7 className="click">{props.click1}</h7>
                    <h7 className="click">{props.click2}</h7>
                    <h7 className="click">{props.click3}</h7>
                </div>   
            </header>
        </div>
    )
}