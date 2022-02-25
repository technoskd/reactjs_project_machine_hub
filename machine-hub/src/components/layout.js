/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import footer_sp from '../images/footer_sp.png'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children} </main>
      
        <footer class='bg-dark text-center text-white text-md-start'>

          <div class='container p-4'>
            <section class=''>
              <div class='row'>
                <div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
                  <h5 class='text-uppercase'>Machine Hub Asia</h5>
                  <img src={footer_sp} alt={'footer_sp'} />
                  <ul class='list-unstyled mb-0'>
                    <li>
                      <p>Machine Hub Asia is an online construction & industrial machinery marketplace for new and used machinery for sales and rental.</p>
                    </li>
                    <li>
                      <p>Search for new and used cranes, excavators, backhoe, dozers, lorry, trailers, trucks and many other machineries in Malaysia and Asia.</p>
                    </li>
                    <li>
                      <p >Copyright © 2018 machinehubasia.com. All rights reserved.</p>
                    </li>
                  </ul>
                </div>
                <div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
                  <h5 class='text-uppercase'>Follow us</h5>
                  <img src={footer_sp} alt={'footer_sp'} />
                  <ul class='list-unstyled mb-0'>
                    <li><a class='btn btn-outline-light btn-floating m-1' href='#!' role='button'><i class='fab fa-linkedin-in'></i></a>Linkedin</li>
                    <li>  <a class='btn btn-outline-light btn-floating m-1' href='#!' role='button' ><i class='fab fa-facebook-f'></i></a>Facebook</li>
                  </ul>
                </div>
                <div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
                  <h5 class='text-uppercase'>Quick Links</h5>
                  <img src={footer_sp} alt={'footer_sp'} />
                  <ul class='list-unstyled mb-0'>
                    <li>
                      <p>Terms & Conditions</p>
                    </li>
                    <li>
                    </li>
                    <li>
                      <p>Privacy</p>
                    </li>
                    <li>
                      <p>Contact</p>
                    </li>
                  </ul>
                </div>
                <div class='col-lg-3 col-md-6 mb-4 mb-md-0'>
                  <h5 class='text-uppercase'>Contact Us</h5>
                  <img src={footer_sp} alt={'footer_sp'} />
                  <ul class='list-unstyled mb-0'>
                    <li>
                      <p>For all enquiries, please contact us at:
                        H/P: +6012 998 8295, +6017 791 1773
                        E: enquiry@machinehubasia.com</p>
                    </li>
                    <li>
                      <p>Address:
                        No.5, Jalan Riang 21, Kawasan Perindustrian Taman Gembira, Tampoi 81200, Johor Bahru, Johor, Malaysia.</p>
                    </li>
                    <li>
                      <p>Hours:
                        Monday - Friday: 8.30 a.m. – 7.00 p.m.
                        Saturday: 8.30 a.m. – 1.00 p.m.
                        Sunday: Closed</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
