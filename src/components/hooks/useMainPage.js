import { useEffect, useState } from "react";

const useMainPage = () => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch('https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR0aHCzzz2cy35cADlBCVZT0Dp0nFghbwAsKpTw-bDh-CrTaDJlIAVE3oCI')
            .then((res)=> res.json())
            .then((data) => setPosts(data.slice(0, 6)))
    },[])

    return { posts, post, setPost }
}

export default useMainPage
