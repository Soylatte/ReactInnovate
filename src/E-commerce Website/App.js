function () {
    return (
        <div className="avecmoi">

        </div>
    )
}

function(ModeToggler) {
    let darkModeOn = false;
    const darkMode = <h1>DarkMode is On</h1>
    const lightMode = <h1>LightMode is On</h1>
    function handleClick() {
        darkModeOn = !true;
        if (darkModeOn === true) {
            console.log("DarkMode is On")
        } else {
            console.log("LightMode is On")
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )

}
export default ModeToggler;