import Weather from "./components/Weather"
import vid from "./assets/video.mp4"
import "./app.css"

function App() {

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen relative">
        <div className="video-container">
          <video autoPlay muted loop id="background-video">
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Weather />
      </div>
    </>
  )
}

export default App;