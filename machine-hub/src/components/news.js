import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { fetchData } from '../utils/service'

const News = () => {

  const [news, setNews] = useState([])

  useEffect(() => {
    fetchData('wp/v2/posts?per_page=10', 'get').then(data => {
      setNews(data)
    })
  }, [])

  return (
    <>
      <div className='card '>
        <div className="list-group">
          <div className="Latest-News">
            <h3>Latest News </h3>
            <img src="https://www.machinehubasia.com/assets/img/footer_sp.png" /> </div>
          {news.map(item => (
            <div className="news-round">
              <Link title="Launch of Machine Hub Asia platform in Malaysia" to="/n/launch-of-machine-hub-asia-platform-in-malaysia">
                <img width="180" src={item.better_featured_image.source_url} />
              </Link>
              <Link title="Launch of Machine Hub Asia platform in Malaysia" to="/n/launch-of-machine-hub-asia-platform-in-malaysia">
                <strong >{item.title.rendered}</strong>
              </Link>
              <p >{item.content.rendered}</p>
            </div>
          ))}
          <p >&nbsp;</p>
        </div>
        <div className="widget widget_media_image"><a to="http://www.htlubricant.com.my/">
          <img width="235" height="250" src="https://www.machinehubasia.com/api/wp-content/uploads/2018/05/HTLubricant-Mobil-Delvac-1.jpeg"/></a>
        </div>
      </div>


    </>
  )
}
export default News;




