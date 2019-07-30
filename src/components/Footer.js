import React from 'react'
import PropTypes from 'prop-types'
import Facebook from '../images/icons/facebook.svg'
import Phone from '../images/icons/phone.svg'

const Footer = ({ containerClass }) => (
  <footer className="footer mt-auto bg-secondary py-5">
    <div className={containerClass}>
      <div className="row justify-content-between">
        <div className="col-md-4 pb-4 text-center-left-md">
          <ul className="list-unstyled">
            <li>
              <a href="https://www.facebook.com/carrierealla/">
                <Facebook className="font-icon mr-1" />
                Facebook
              </a>
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
          <a
            href="https://www.infogreffe.fr/entreprise-societe/812786986"
            className="small"
          >
            SIRET 812 786 986 R.C.S. RODEZ
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 small text-center">
          Icônes (
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
            rel="noopener"
          >
            CC 3.0 BY
          </a>
          ):
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://www.freepik.com/" title="Freepik">
                Freepik
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.flaticon.com/authors/gregor-cresnar">
                Gregor Cresnar
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.flaticon.com/authors/pixel-perfect">
                Pixel perfect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  containerClass: PropTypes.string.isRequired,
}

export default Footer
