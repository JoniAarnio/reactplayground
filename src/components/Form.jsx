
import React from 'react'


export default function Form() {

    const [formData, setFormData] = React.useState({
        firstName : "",
        lastName : "",
        email : "",
        comments : "",
        isActive: true,
        employment: "",
        favColor: ""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault() //Estetään sivun päivitys kun "Submit" nappulaa painetaan.
        console.log("4. ", formData)
    }
    
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First name"
                    onChange={handleChange}
                    name="firstName"
                    className="inputForm--text"
                    value={formData.firstName}
                />

                <input
                    type="text"
                    placeholder="Last name"
                    onChange={handleChange}
                    name="lastName"
                    className="inputForm--text"
                    value={formData.lastName}
                />

                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    className="inputForm--email"
                    value={formData.email}
                />

                <textarea
                    value={formData.comments}
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                    className="inputForm--textarea"
                />

                <input 
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    name="isActive"
                />
                <label htmlFor="isActive">Onko aktiivinen?</label>
                <br />
                <br />

                <fieldset>
                    <legend>Employment status</legend>

                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />

                    <label htmlFor="unemployed">Unemployed</label>
                    <br />

                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />

                    <label htmlFor="part-time">Part-time</label>
                    <br />

                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />

                    <label htmlFor="full-time">Full-time</label>
                    <br />
                    
                </fieldset>
                <br />

                <label htmlFor="favColor">What is your favorite color? </label><br /><br />

                <select
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />
                <br />
                <button>Submit</button>
            </form>
            <br />
            <br />

        </div>
    )
}