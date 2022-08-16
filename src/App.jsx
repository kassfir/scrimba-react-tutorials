import Card from './components/Card'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  let events = [
    {
      "img": "./katie-zaferes.png",
      "rating": "5.0",
      "reviewCount": 6,
      "country": "Australia",
      "title": "Life Lessons with Katie Zaferes",
      "price": 136,
    } 
  ]


  return ( 
    <div className='main-container'>
      <Header />
      {/* <Hero /> */}
      <Card 
        img={events[0]['img']}
        rating={events[0]['rating']}
        reviewCount={events[0]['reviewCount']}
        country={events[0]['country']}
        title={events[0]['title']}
        price={events[0]['price']}
      />
    </div>
  )
}

export default App
