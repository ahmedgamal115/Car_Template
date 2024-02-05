import Footer from './Pages/Footer';
import {Navbar,Accessories,ContectUs,
  Feature,Graphs,Hero,Partners,
  Products,Spots} from './Pages/index'

const App = () => {
  return (
    <main className='relative'>
        <Navbar/>
      <section className="padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <Spots/>
      </section>
      <section className="padding bg-primary">
        <Feature/>
      </section>
      <section className="padding">
        <Products/>
      </section>
      <section className="padding bg-master-blue">
        <Graphs/>
      </section>
      <section className="relative padding bg-hero before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 
      before:bg-gradient-to-t before:from-[rgba(0,0,0,0.8677522034204307)] ">
        <Partners/>
      </section>
      <section className="padding">
        <Accessories/>
      </section>
      <section className="bg-primary">
        <ContectUs/>
      </section>
      <section className="bg-primary">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
