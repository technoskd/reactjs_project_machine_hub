import { Link } from 'gatsby'
import React, { useState } from 'react'

import Layout from '../components/layout'
import { fetchData } from '../utils/service'

const SignIn = () => {

  const [loading, setLoading] = useState(false)
  const [logged, setLogged] = useState({
    email: '',
    password: '',
    // response: '',
    // error: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    fetchData('mharoutes/login', logged, 'post').then(data => {
      console.log(logged, '000000')
      setLoading(false)
      setLogged(prev => ({
        ...prev,
        response: data,

      }))
      if (data.error === false) {
        { alert("hello") }
      
        localStorage.setItem('bIESIcg52We9', JSON.stringify())
        window.location.href = '/dashboard'
      }
      else {
        alert("Done")
      }
    })
  }

  return (
    <div>
      <Layout>
        <div className='bg-white border rounded-5'>
        <Link
                className='btn btn-pink text-warning '
                role='button'
                to='/'>
                <small >&laquo; Home</small></Link>
          <div className='w-100 p-4 d-flex justify-content-center pb-4'>
            <div className='tab-content'>
              <form
                className='p-4 p-md-5 border rounded-3 bg-light'
                onSubmit={handleSubmit}
              >
                {logged.response ? (
                  <div
                    className={`alert ${logged.response.response_msg
                      ? 'alert-danger'
                      : 'alert-primary'
                      }`}
                    role='alert'
                  >
                    {logged.response.error}
                  </div>
                ) : null}
                <div className='mb-3'>
                  <label for='floatingInput'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='name@example.com'
                    value={logged.email}
                    onChange={e =>
                      setLogged(prev => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className=' mb-3'>
                  <label for='floatingPassword'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='Password'
                    placeholder='Password'
                    value={logged.password}
                    onChange={e =>
                      setLogged(prev => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='checkbox mb-3'>
                  <label>
                    <input type='checkbox' value='remember-me' />
                    <small className='text-muted'>Agree Terms and conditions </small>
                  </label>
                </div>
                <button className='w-100 btn btn-lg btn-primary' type='submit'>

                  {loading ? (
                    <span className='spinner-border' role='status'></span>
                  ) : null}
                  Sign up
                </button>

                <hr className='my-4' />
                <small className='text-muted'>
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default SignIn
