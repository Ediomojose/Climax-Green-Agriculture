import React from 'react'
import TemplateWrapper from '../../../widget/TemplateWrapper'
import AboutOverview from './AboutOverview'
import TeamBanner from './TeamBanner'

const AboutPage = () => {
  return (
    <TemplateWrapper>
       <AboutOverview/>
       <TeamBanner/>
    </TemplateWrapper>
  )
}

export default AboutPage