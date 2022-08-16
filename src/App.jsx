import Card from './components/Card'
import Header from './components/Header'
import Hero from './components/Hero'
import data from './data'

function App() {
  // let events = Data

  let eventComponents = data.map(event =>
      <Card 
        key={event.id}
        img={event.coverImg}
        rating={event.stats.rating}
        reviewCount={event.stats.reviewCount}
        location={event.location}
        title={event.title}
        price={event.price}
        openSpots={event.openSpots}
      />
      
  );


  return ( 
    <div className='main-container'>
      <Header />
      {/* <Hero /> */}
      <section className='cards-list'> 
        {eventComponents}
      </section>
    </div>
  )
}

export default App
