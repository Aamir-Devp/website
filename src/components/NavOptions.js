import React,{useState, useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
    const [miPhoneToggle, setMiPhoneToggle] = useState("");
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState("");
    const [tvToggle, setTvToggle] = useState("");
    const [laptopsToggle, setLaptopsToggle] = useState("");
    const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState("");
    const [homeToggle, setHomeToggle] = useState("");
    const [audioToggle, setAudioToggle] = useState("");
    const [accessoriesToggle, setAccessoriesToggle] = useState("");

    useEffect(() => {
        if(window.location.pathname === "/miphones"){
            return setMiPhoneToggle(true)
        }
        if(window.location.pathname === "/redmiphones"){
            return setRedmiPhonesToggle(true)
        }
        if(window.location.pathname === "/tv"){
            return setTvToggle(true)
        }
        if(window.location.pathname === "/laptops"){
            return setLaptopsToggle(true)
        }
        if(window.location.pathname === "/lifestyle"){
            return setFitnessAndLifeStyleToggle(true)
        }
        if(window.location.pathname === "/home"){
            return setHomeToggle(true)
        }
        if(window.location.pathname === "/audio"){
            return setAudioToggle(true)
        }
        if(window.location.pathname === "/accessories"){
            return setAccessoriesToggle(true)
        }

    }, [])
    return (
        <div className="navOptions" >
            {miPhoneToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {redmiPhonesToggle ? redmiPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {tvToggle ? tv.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {laptopsToggle ? laptop.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {homeToggle ? home.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {audioToggle ? audio.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {accessoriesToggle ? accessories.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
        </div>
    )
}

export default NavOptions