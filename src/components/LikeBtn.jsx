import { useState } from "react";

const LikeBtn=({upvotes}) => {
    const [likes, setLikes] = useState(upvotes)
    const handleClick = () => {
        return setLikes((currentLikes)=>currentLikes + 1)
    }

    return (
        <div>
            <button onClick={handleClick}> {likes} 👍 </button>
        </div>
    )
    }

export default LikeBtn;