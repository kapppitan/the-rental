import { Fragment } from "react"

import { Hero } from "./components/Hero"
import { Movies } from "./components/Movies"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <Fragment>
        <div className="font-vcr overflow-hidden">
          <Hero />
          <Movies />
          <Footer />
        </div>
      </Fragment>
    </>
  )
}

export default App
