import logo from "../../../../logo.svg";

export function HeaderRight(){
    return(
        <div className="Home">
            <header className="App-header">
                <div className="Header-right">
                    <p>Maldan Shop</p>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </header>
        </div>
    )
}