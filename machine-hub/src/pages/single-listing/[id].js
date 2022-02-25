import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/service';
import Layout from '../../components/layout';

const SinglePage = (props) => {
  const [long, setLong] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let splited = props.id.split('-');
    let id = splited[splited.length - 1];

    fetchData(`wp/v2/mha-listings/${id}`).then(data => {
      console.log(long, 'longggggggggggggg');
      setLong(data)
      setLoading(false)

    })
  }, [])

  return (
    <>
      <Layout>
        <div className='main-wrapper'>
          <div className='container'>
            <div className="row">
              <div className="col-xs-12 col-lg-9 listing-header Details">
                <div className="card">
                  <div className="card-body bg-dark">
                    <header>
                      <span>
                        <a title="Back to search" href="/listings">
                          <span className="glyphicon"></span>Back to search</a>
                      </span>
                    </header>
                  </div>
                  {loading ?
                    (<div class="spinner-border text-warning d-flex justify-content-center" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    ) :
                    <div className="col-xs-12 col-lg-9 MD col-sm-8 listing-details-left">

                      <div className="carousel generic-carousel slide">
                        <div className="col-xs-12 col-lg-12 MD">
                          <> <h2 className="listing-title">{long.title.rendered}</h2>
                            <img src='https://www.machinehubasia.com/assets/img/footer_sp.png' />
                            <img src={long.better_featured_image.timb_source_url} /></>
                        </div>
                        <div className="col-xs-12 col-lg-4 MD">&nbsp;</div>
                        <div className="carousel-inner featured-pic">
                          <div className="item active srle">
                          </div>
                          <a className="right carousel-control" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                      {loading ? "loading data..." :
                        <>
                          <div class="overflow-scroll d-inline-block">
                            <ul class="thumbnails-carousel center clearfix">
                              {long.gallery.map((data) => {
                                console.log("data", data);
                                return (
                                  <>
                                    <li className='d-inline-block'>  <img width="100px" src={data.timb_source_url} /></li>
                                  </>
                                )
                              })}
                            </ul>
                          </div>
                        </>
                      }
                    </div>}
                </div>
              </div>
              <div className="col-xs-12 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Enquiry</h5>
                    <img src='https://www.machinehubasia.com/assets/img/footer_sp.png' />
                    <form className="form-inline" action="/action_page.php">
                      <div className="form-group">
                        <div className="form-group required">
                          <label>Name</label>
                          <input className="form-control ng-pristine ng-invalid ng-touched" name="input_1" placeholder="Your name" required="" type="text" />
                        </div>
                        <div className="form-group required">
                          <label>Email</label>
                          <input className="form-control ng-pristine ng-invalid ng-touched" name="input_2" placeholder="Your email" required="" type="email" />
                        </div>
                        <label for="email">Phone</label>
                        <input className="form-control ng-pristine ng-invalid ng-touched" name="input_3" placeholder="Your phone" required="" type="text" />
                        <label for="email">Location</label>
                        <input className="form-control ng-untouched ng-pristine ng-invalid" name="input_4" placeholder="Your location" required="" type="text" />
                        <label for="email">Message</label>
                        <textarea className="form-control ng-pristine ng-invalid ng-touched" name="input_5" placeholder="Your message" required="" rows="5"></textarea>
                      </div>
                      <div className="form-group form-group-0margin text-center">
                        <button className="btn btn-theme btn-lg btn-block bg-warning" type="submit">Send Enquiry</button> </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

    </>
  )
}
export default SinglePage