import React, { useEffect, useState } from 'react';

import { Link } from 'gatsby';
import { fetchData } from '../utils/service'
import Layout from '../components/layout';


const Listing = () => {

  const [listing, setListing] = useState([])

  useEffect(() => {
    fetchData('wp/v2/mha-listings?per_page=15', 'get').then(data => {
      setListing(data)
    })
  }, [])

  return (
    <Layout>
      <>
        <div className='d-flex justify-content-center'>
          <div className='card w-50'>
            <Link
              className='btn btn-pink text-warning '
              role='button'
              to='/'>
              <small >&laquo; Previous</small></Link>
            <header className="listing-actions clearfix bg-dark">
              <span className='text-light' >34 Matches</span>
              <span class="text-right float-end">
                <label className="text-light">Sort by &nbsp;</label>
                <select id="sortby">
                  <option value="mostrecent">Most Recent</option>
                  <option value="lastupdate">Last Update</option>
                  <option value="featured">Featured</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="yearmade-desc">Year Made (High to Low)</option>
                  <option value="yearmade-asc">Year Made (Low to High)</option>
                </select>
              </span>
            </header>
            <div>
              <h3>Recent Listing</h3>
              <img src="https://www.machinehubasia.com/assets/img/footer_sp.png" />
            </div>
            {listing.map(item => (
              <>
                <div className="" >
                  <div className="card " >
                    <div class="col-xs-12 col-lg-12 col-sm-6 PD_0 box-shadow Listing-wapper" id="listing-908">
                      <div class="col-xs-12 col-lg-12 fullimg">
                        <h2 class="listing-title">
                          {item.title.rendered}
                        </h2>
                        <img src="https://www.machinehubasia.com/assets/img/footer_sp.png" />
                      </div>
                      <div class="col-lg-5 listing-pic">
                        <Link to={'/single-listing/' + item.slug + '-' + item.id}>
                          <img width="25px" className='w-50' src={item.better_featured_image.source_url} /></Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <button className='btn btn-pink bg-warning'
                        role='button'>{item.mha_metadata._price}</button>
                      <h5 className='listing-title'>
                        {item.title.rendered}
                      </h5>
                      <div className='machine-meta-data clearfix'>
                        <img src='	https://www.machinehubasia.com/assets/img/summary-icons/map.png' />
                        <small>Pahang</small>
                        <img src='https://www.machinehubasia.com/assets/img/summary-icons/mileage.png' />
                        <img src='https://www.machinehubasia.com/assets/img/summary-icons/condition.png' />
                        <small>Used</small>
                        <img src='https://www.machinehubasia.com/assets/img/summary-icons/transmission.png' />
                        <small>N/A</small>
                        <img src='	https://www.machinehubasia.com/assets/img/summary-icons/mfg-year.png' />
                      </div>
                      <a href="#" className="btn btn-warning">Details</a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

      </>
    </Layout>
  )
}
export default Listing;




