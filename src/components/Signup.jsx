import React from "react"

export default function App() {

    const [signupFormData, setSignupFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirmation: "",
        joinNewsletter: true
    })

    //console.log(signupFormData)

    // Jokainen kerta kun formin inputit muuttuvat, tämä funktio suoritetaan. signupFormDataa (email, password, passwordConfirmation, joinNewsletter) päivitellään 
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setSignupFormData(prevSignupFormData => {
            return {
                ...prevSignupFormData,
                [name]: type === "checkbox" ? checked : value //mikäli muutetun inputin tyyppi on 'checkbox', muutetaan 'checked' ominaisuus. mikäli ei, muutetaan 'value' ominaisuus
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (signupFormData.password === signupFormData.passwordConfirmation && signupFormData.joinNewsletter === true) {
            // Jos salasanat ovat samat ja käyttäjä on valinnut/klikannut "joinNewsletter" checkboxia
            return console.log("5. ","Successfully signed up! Thanks for signing up for the newsletter!")
        } else if (signupFormData.password === signupFormData.passwordConfirmation) {
            // Jos salasanat ovat samat, mutta käyttäjä ei ole valinnut/klikannut "joinNewsletter" checkboxia
            return console.log("5. ","Successfully signed up!")
        }
        else {
            //Jos salasanat eivät ole samat
            return console.log("5. ","Passwords do not match!")
        }
    }
    
    return (
        <div className="form-container">
            <h1>5. Signup-lomake</h1>

            <form className="formSignup" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email address"
                    className="inputSignup--email"
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="inputSignup--password"
                    onChange={handleChange}
                />
                <input 
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Confirm password"
                    className="inputSignup--password"
                    onChange={handleChange}
                />
                
                <div className="inputSignup--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinNewsletter"
                        className="inputSignup--checkbox"
                        checked={signupFormData.joinNewsletter}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="inputSignup--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
