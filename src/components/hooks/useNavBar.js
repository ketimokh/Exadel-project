import {useState} from "react";

const useNavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const toggleHamburger = () => {
        setHamburgerOpen(pre => !pre)
    }

    return { hamburgerOpen, toggleHamburger }
}

export default useNavBar
