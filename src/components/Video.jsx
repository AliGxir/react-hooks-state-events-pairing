const Video=({embedUrl, views, createdAt}) => {
    return(
    <div >   
        <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <p >{views} Views | Upload {createdAt}</p>
    </div>
    )
}

export default Video;