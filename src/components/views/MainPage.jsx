import PostModal from "./PostModal";
import useMainPage from "../hooks/useMainPage";

const MainPage = () => {
    const { posts, setPost, post } = useMainPage()
    return (
        <>
            <div className='image-container'>
                <div className='banner-image'>
                    <div className='banner-title'>
                        <h1> Travel In GEORGIA </h1>
                    </div>
                </div>
            </div>
            <div className='posts-wrapper'>
                {posts.map((el) => {
                    return (
                        <div key={el.id} className='post-wrapper postFlex'>
                            <div>
                                <h3 className='post-title'> {el.title} </h3>
                                <p className='post-text'> {el.description}</p>
                            </div>
                            <div className='button-bottom'>
                                <button type='button' onClick={() => setPost(el)} className='post-button'>
                                    View post
                                </button>
                            </div>
                        </div>
                    )})}
                {post !== null ? <PostModal post={post} setPost={setPost} /> : null}
            </div>
        </>
    )
}

export default MainPage
