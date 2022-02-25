import React, { useState } from 'react'

import { useEffect } from 'react'
import { fetchData } from '../utils/service'
import footer_sp from '../images/footer_sp.png'
import { Link } from 'gatsby'
import News from '../components/news'
import background from "../images/bg.png";


const Equipment = () => {

  const [equipment, setEquipment] = useState([])
  const [location, setLocation] = useState([])
  const [makers, setMakers] = useState([])
  const [category, setCategory] = useState([])
  const [listing, setListing] = useState([])


  useEffect(() => {
    fetchData('wp/v2/taxonomy-equipments?per_page=100&orderby=name&exclude', 'get').then(data => {
      setEquipment(data)
    })

    fetchData('wp/v2/taxonomy-locations?per_page=100', 'get').then(data => {
      setLocation(data)
    })

    fetchData('wp/v2/taxonomy-makers?per_page=100&exclude=81', 'get').then(data => {
      setMakers(data)
    })

    fetchData('wp/v2/taxonomy-equipments?per_page=15', 'get').then(data => {
      setCategory(data)
    })

    fetchData('wp/v2/mha-listings?per_page=15', 'get').then(data => {
      setListing(data)
    })
  }, [])

  return (
    <>
      {/* Equipments */}
      <div className='main-wapper' style={{ backgroundImage: `url(${background})` }}>
        <div className='container'>
          <div className='row bg- secondary'>
            <div>
              <div className='list-group'>
              <div _ngcontent-c3="" class="slidebg-inner">
                <div className='row align-items-center g-lg-5 w-100'>
                  <div className='col-lg-6 col-lg-6 col-sm-6 col-sm-6 PD-left d-inline-block' style={{padding:'0px'}}>
                  <div className='card bg-light'>
                    <h3>Find construction equipment</h3>
                     <form className='form-card py-5' style={{ padding: '50px' }} onsubmit='event.preventDefault()'>
                        <div className='row justify-content-between text-left'>
                          <div className='form-group col-sm-6 flex-column d-flex'>
                            <select className='form-select form-select' aria-label='.form-select-sm example'>
                              <option selected>Types of Equipment</option>
                              {equipment.map(item => (
                                <option>{item.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className='form-group col-sm-6 flex-column d-flex'>
                            <select className='form-select form-select' aria-label='.form-select-sm example'>
                              <option selected>Locations: Location</option>
                              {location.map(item => (
                                <option>{item.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className='row justify-content-between text-left'>
                          <div className='form-group col-sm-6 flex-column d-flex'>
                            <select className='form-select form-select' aria-label='.form-select-sm example'>
                              <option selected>Makers: All Makers</option>
                              {makers.map(item => (
                                <option>{item.name}</option>
                              ))}
                            </select>  </div>
                          <div className='form-group col-sm-6 flex-column d-flex'>
                            <select className='form-select form-select' aria-label='.form-select-sm example'>
                              <option selected>Prize: Min</option>
                              {location.map(u => (
                                <option>{500}</option>
                              ))}
                            </select>
                          </div>
                          <div className='form-group col-sm-6 flex-column d-flex'>
                            <select className='form-select form-select' aria-label='.form-select-sm example'>
                              <option selected>Prize: Max</option>
                              {location.map(u => (
                                <option>{1000}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className='row justify-content-md-end'>
                          <div className='form-group col-lg-3 '>
                            <button className='btn btn-lg btn-warning Round-btn col-sm-12 col-sm-12 col-xs-12 col-xs-12 text-right MD' type='submit'>Search</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Category */}
                  <div className='col-lg-6 col-lg-6 col-sm-6 col-sm-6 PD-left' style={{padding:'0px'}}>
                    <div className='card light'>
                    <h3 className='card-title  justify-content-md-end'>Search By Category</h3>
                    <ul>
                        {category.map(item => (
                          <> <Link to={item.slug}> <li className='d-inline-block'><img width='60' src={item.thumbnail} />
                              {item.name}</li></Link>
                          </>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* News */}
      <div className="container" >
        <div className="row" >
          <div className="col-3" >
            <News />
          </div>

          {/* Listing */}
          <div className="col-9" >
            <Link
              className='btn btn-pink text-warning float-end'
              role='button'
              to='/listing'>
              <small >View all →</small></Link>
            <div>
              <h3>Recent Listing</h3>
              <img src='https://www.machinehubasia.com/assets/img/footer_sp.png' />
            </div>
            {listing.map(item => (
              <>
                <div class="d-inline-block w-25 mx-3 my-2 " >
                  <div class="card" >
                    <Link to={'/single-listing/' + item.slug + '-' + item.id}>
                      <img className='w-100' src={item.better_featured_image.source_url} /></Link>
                    <div className="card-body">
                      <button className='btn btn-pink bg-warning'
                        role='button'>{item.mha_metadata._price}</button>
                      <h5 className='listing-title'>
                        {item.title.rendered}
                      </h5>
                      <div className='machine-meta-data clearfix' >
                        <img src='	https://www.machinehubasia.com/assets/img/summary-icons/map.png' style={{ width: "17px" }} />
                        <small>Pahang</small>
                        <img src='https://www.machinehubasia.com/assets/img/summary-icons/mileage.png' style={{ width: "17px" }} />
                        <img src='https://www.machinehubasia.com/assets/img/summary-icons/condition.png' style={{ width: "17px" }} />
                        <small>Used</small>
                        <img src='https://www.machinehubasia.com/assets/img/summary-icons/transmission.png' style={{ width: "17px" }} />
                        <small>N/A</small>
                        <img src='	https://www.machinehubasia.com/assets/img/summary-icons/mfg-year.png' style={{ width: "17px" }} /></div>
                      <a href="#" class="btn btn-warning">Details</a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="SPlogo-full">
          <div className="container">
            <div className="row">
              <div className="col-xs2 col-sm-6 col-md-6 col-lg-2 iphone-padding">
                <img src="https://www.machinehubasia.com/api/timthumb.php?src=https://www.machinehubasia.com/api/wp-content/uploads/2018/03/denyo-logo.png&amp;h=30" />
              </div><div className="col-xs2 col-sm-6 col-md-6 col-lg-2 iphone-padding">
                <img src="https://www.machinehubasia.com/api/timthumb.php?src=https://www.machinehubasia.com/api/wp-content/uploads/2018/03/toyota-logo.png&amp;h=30" />
              </div><div className="col-xs2 col-sm-6 col-md-6 col-lg-2 iphone-padding">
                <img src="https://www.machinehubasia.com/api/timthumb.php?src=https://www.machinehubasia.com/api/wp-content/uploads/2018/01/s-logo3.png&amp;h=30" />
              </div><div className="col-xs2 col-sm-6 col-md-6 col-lg-2 iphone-padding">
                <img src="https://www.machinehubasia.com/api/timthumb.php?src=https://www.machinehubasia.com/api/wp-content/uploads/2018/01/s-logo2.png&amp;h=30" />
              </div><div className="col-xs2 col-sm-6 col-md-6 col-lg-2 iphone-padding">
                <img src="https://www.machinehubasia.com/api/timthumb.php?src=https://www.machinehubasia.com/api/wp-content/uploads/2018/01/s-logo1.png&amp;h=30" />
              </div><div className="col-xs2 col-sm-6 col-md-6 col-lg-2 iphone-padding">
                <img src="https://www.machinehubasia.com/api/timthumb.php?src=https://www.machinehubasia.com/api/wp-content/uploads/2018/01/s-logo.png&amp;h=30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Equipment


