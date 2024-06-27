import video from "../data/video.js";
import Video from "./Video.jsx";
import LikeBtn from "./LikeBtn.jsx";
import DislikeBtn from "./DislikeBtn.jsx";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video {...video}/>  
      <LikeBtn {...video}/>
      <DislikeBtn {...video}/>
      
    </div>
  );
}

export default App;
