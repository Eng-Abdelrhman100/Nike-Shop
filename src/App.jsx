import {Hero , PopularProducts , SuperQuality , Services , SpecialOffer , CustomerReviews , Subscribe , Footer} from './sections';
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
import Nav from './components/Nav';
const App = () =>  {

  return (
    <>
      <main className="relative overflow-x-hidden">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero/>
        </section>
        <section className="padding">
          <PopularProducts/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          <Services/>
        </section>
        <section className="padding">
          <SpecialOffer/>
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="padding bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
        <ScrollToTop
        smooth
        component={<FaArrowUp size={18} />}
        className="!bg-coral-red !text-white !rounded-full !shadow-lg hover:!bg-red-500 !flex !items-center !justify-center"
        style={{
          bottom: "40px",
          right: "30px",
          width: "45px",
          height: "45px",
          zIndex: 1000,
        }}
        visibilityHeight={window.innerHeight / 2} 
      />
      
      </main>
    </>
  )
}

export default App
