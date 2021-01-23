/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Hero from 'components/Hero/Hero';
import React,{useRef} from 'react';
import NavBar from '../components/Navbars/DemoNavbar';
import Footer from 'components/Footers/SimpleFooter';
import ThreeCards from 'components/ThreeCards/ThreeCards';
import Features from 'components/Features/Features';
import Customers from 'components/Customers/Customers';
import FeaturesModern from 'components/Features/FeaturesModern';
function Index() {
  const frontend = useRef(null)
  const backend = useRef(null)
  const design = useRef(null)
  function scrollTo(to) {
    switch (to) {
      case 'Frontend': frontend.current.scrollIntoView();
        break;
      case 'Backend':backend.current.scrollIntoView();
        break;
      case 'Design':design.current.scrollIntoView();
        break;
      default:
        break;
    }
  }
  return (
    <>
      <NavBar scrollTo={scrollTo} />
      <Hero />
      <ThreeCards />
      <Features myref={frontend}/>
      <Customers myref={backend}/>
      <FeaturesModern myref={design}/>
      <Footer />
    </>
  );
}

export default Index;
