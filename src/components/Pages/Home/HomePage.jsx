import React from 'react'
import TemplateWrapper from '../../../widget/TemplateWrapper'
import HeroSection from './HeroSection'
import IntroductionSection from './IntroductionSection'
import Testimonials from './Testimonials'
import Banner from './Banner'
import CalltoAction from './CalltoAction'

const HomePage = () => {
  return (
    <>
    <TemplateWrapper>
    <HeroSection/>
    <IntroductionSection/>
    <Testimonials/>
    <Banner/>
    <CalltoAction/>
    </TemplateWrapper>
    </>
  )
}

export default HomePage