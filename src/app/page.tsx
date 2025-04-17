import HowItWorks from "./section/landing/howitworks";
import Intro from "./section/landing/intro";
import Nav from "./section/landing/navbar";



export default function Home (){
  return(
    <div>
      <Nav />
      <Intro />
      <HowItWorks />
    </div>
  )
}