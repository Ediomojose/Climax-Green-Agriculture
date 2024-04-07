import React from 'react'
import TemplateWrapper from '../../../widget/TemplateWrapper'
import AboutOverview from './AboutOverview'
import TeamBanner from './TeamBanner'
import BannerBlock from './BannerBlock'

const AboutPage = () => {
  return (
    <TemplateWrapper>
       <AboutOverview/>
       <TeamBanner/>
       <BannerBlock/>
    </TemplateWrapper>
  )
}

export default AboutPage