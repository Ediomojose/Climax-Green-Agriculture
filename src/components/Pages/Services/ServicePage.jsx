import React from 'react'
import TemplateWrapper from '../../../widget/TemplateWrapper'
import ServiceHeroHeader from './ServiceHeroHeader'
import BenefitContainer from './BenefitContainer'

const ServicePage = () => {
  return (
    <TemplateWrapper>
        <ServiceHeroHeader/>
        <BenefitContainer/>
    </TemplateWrapper>
  )
}

export default ServicePage