import React from "react"
import TravelBlogEntry from "./components/TravelBlogEntry"
import Navbar from "./components/Navbar"
import data from './data'


function App() {

  let travelBlogEntries = data.map((item) => {
    return (<div>
      <TravelBlogEntry 
        key={item.id}
        item={item}
      />
      <hr className="blog-entry--separator"/>
    </div>
    );
  })

  console.log(travelBlogEntries);


  return (
    <div>
      <Navbar />
      <div className="main-container">
        { travelBlogEntries }
      </div>
    </div>
  )
}

export default App 