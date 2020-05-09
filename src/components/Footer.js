import React from 'react'
import { ALink, Container, Social } from '@components'

import {
  SiteFooter,
  FooterEmail,
  FooterBottom,
  FooterContent,
} from '@styles/components/footer'

const Footer = () => (
  <SiteFooter>
    <Container>
      <FooterBottom>
        <FooterContent>
          <h5>Get in touch</h5>
          <FooterEmail>
            <ALink
              href="mailto:vitor@vmarinho.dev"
              internal={false}
              variant="color"
            >
              vitor@vmarinho.dev
            </ALink>
          </FooterEmail>
        </FooterContent>
        <Social />
      </FooterBottom>
    </Container>
  </SiteFooter>
)

export default Footer
