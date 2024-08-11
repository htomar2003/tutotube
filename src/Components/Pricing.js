import React from 'react'
import './Pricing.css'
import PricingCard from './PricingCard';
import Footer from './Footer'

const Pricing = () => {
  return (
    <div className='pricing'>
      <h1 className='head'>Plans for any kind of Developer.</h1>
      <div className="cards">
        <PricingCard
          phead="Free"
          pheadp="The perfect plan to get started with Tutotube"
          plan="Free"
          planp="Free for Limited Time"
          btn="Start for Free"
          array1={['Limited for individuals', 'Only available for 2+ people']}
          array2={['50 AI credits upon sign up']}
        />
        <PricingCard
          phead="Pro"
          pheadp="For power creators and teams of all sizes"
          plan="$10"
          planp="Per person/month billed annually or $20 billed monthly"
          btn="Get Pro"
          btnstyle="true"
          array1={['Unlimited for individuals', 'Unlimited for Workspaces', 'Fast Response']}
          array2={['1000 AI credits upon sign up', 'Unlimited for workspaces']}
        />
        <PricingCard
          phead="Enterprise"
          pheadp="For organizations that need advanced controls"
          plan=""
          planp="Contact Us for Pricing"
          btn="Get in Touch"
          array1={['Unlimited for individuals', 'Unlimited for Workspaces', 'Fast Response']}
          array2={['Unlimited AI credits upon sign up', 'Unlimited for workspaces', 'Advanced analytics']}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing