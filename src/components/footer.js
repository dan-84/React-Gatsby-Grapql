import React from 'react'
import { ExternalLink } from '@browniebroke/react-ui-components'

import Facebook from '../images/icons/facebook.svg'
import Phone from '../images/icons/phone.svg'

const Footer = ({ containerClass = 'container' }) => (
  <footer className="footer mt-auto bg-secondary py-5">
    <div className={containerClass}>
      <div className="row justify-content-between">
        <div className="col-md-4 pb-4 text-center-left-md">
          <ul className="list-unstyled">
            <li>
              <ExternalLink
                to="https://www.facebook.com/carrierealla/"
                title="Notre Page Facebook"
              >
                <Facebook className="font-icon mr-1" />
                Facebook
              </ExternalLink>
            </li>
            <li>
              <a href="tel:+33565621365">
                <Phone className="font-icon mr-1" />
                Tel: 05 65 62 13 65
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 pb-4 text-center-right-md">
          <ExternalLink
            to="https://www.infogreffe.fr/entreprise-societe/812786986"
            className="small"
            title="Info Greffe"
          >
            SIRET 812 786 986 R.C.S. RODEZ
          </ExternalLink>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 small text-center">
          Icônes (
          <ExternalLink
            to="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
          >
            CC 3.0 BY
          </ExternalLink>
          ):
          <ul className="list-inline">
            <li className="list-inline-item">
              <ExternalLink to="https://www.freepik.com/" title="Freepik">
                Freepik
              </ExternalLink>
            </li>
            <li className="list-inline-item">
              <ExternalLink
                to="https://www.flaticon.com/authors/gregor-cresnar"
                title=""
              >
                Gregor Cresnar
              </ExternalLink>
            </li>
            <li className="list-inline-item">
              <ExternalLink
                to="https://www.flaticon.com/authors/pixel-perfect"
                title=""
              >
                Pixel perfect
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
