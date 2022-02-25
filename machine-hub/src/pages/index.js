import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Equipment from '../components/equipment'

const IndexPage = () => (
  <>
  <Layout>
      <Seo title='Home' />
      <Equipment />
    </Layout>
  </>

)
export default IndexPage
