import React from "react"

export default function WindowTracker() {

    const [show, setShow] = React.useState(true)

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    function toggle() {
        setShow(prevShow => !prevShow)
    }

    React.useEffect(() => {

        //Funktio joka asettaa windowWidth staten siksi mikä se on sillä hetkellä kun funktio suoritetaan.
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        //EventListener joka ikkunan kokoa muutettaessa pyörittää watchWidth funktion.
        window.addEventListener("resize", watchWidth)

        //Vähän cleanuppia. Ilman tätä funktiota, jos käyttäjä piilottaa WindowTrackerin, jää eventlistener kummittelemaan ja aiheuttamaan memory leakkia
        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, []) 

    return (
        <div className="container">
            <button onClick={toggle}>Toggle</button>
            {show && <h1>Window width: {windowWidth} pixels</h1>}
        </div>
        
    )
}
