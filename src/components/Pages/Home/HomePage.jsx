import React from 'react'
import TemplateWrapper from '../../../widget/TemplateWrapper'
import HeroSection from './HeroSection'
import IntroductionSection from './IntroductionSection'
import Testimonials from './Testimonials'
import Banner from './Banner'
import CalltoAction from './CalltoAction'
import FaqSection from '../../Elements/FAQ/FAQSection'
import SeoWrapper from '../../../SEO/SeoWrapper'

<SeoWrapper title={'Climax Green Agriculture'} pageName={`Home Page`}/>

const HomePage = () => {
  return (
    <>
    <TemplateWrapper>
    <HeroSection/>
    <IntroductionSection/>
    <Testimonials/>
    <Banner/>
    <FaqSection/>
    <CalltoAction/>
    </TemplateWrapper>
    </>
  )
}

export default HomePage