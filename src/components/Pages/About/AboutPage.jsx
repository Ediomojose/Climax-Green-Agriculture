import React from 'react'
import TemplateWrapper from '../../../widget/TemplateWrapper'
import AboutOverview from './AboutOverview'
import TeamBanner from './TeamBanner'
import BannerBlock from './BannerBlock'
import Statement from './Statement'

const AboutPage = () => {
  return (
    <TemplateWrapper>
       <AboutOverview/>
       <TeamBanner/>
       <Statement/>
       <BannerBlock/>
    </TemplateWrapper>
  )
}

export default AboutPage