import React, { useState } from 'react'

import Layout from '../components/layout'
import { fetchData } from '../utils/service'
import { Link } from 'gatsby'

const Register = () => {
  const [register, setRegister] = useState({
    display_name: '',
    user_email: '',
    password: '',
    error: '',
    response_msg: '',
    tnc: true,
  })

  const handleSubmit = e => {
    e.preventDefault()
    fetchData('mharoutes/register', register, 'post').then(data => {
      console.log(register, 'registration')
      setRegister(prev => ({
        ...prev,
        response: data,
      }))
    })

    localStorage.setItem('bIESIcg52We9', JSON.stringify())
    window.location.href = '/signIn'
  }
  return (
    <Layout>
      <div>
        <div className='bg-white border rounded-5'>
          <div className='w-100 p-4 d-flex justify-content-center pb-4'>
            <Link
              className='btn btn-pink text-warning '
              role='button'
              to='/'>
              <small >&laquo; Home</small></Link>
            <div className='tab-content'>

              <form
                className='p-4 p-md-5 border rounded-3 bg-light'
                onSubmit={handleSubmit}
              >
                {register.response ? (
                  <div
                    className={`alert ${register.response.error
                      ? 'alert-danger'
                      : 'alert-primary'
                      }`}
                    role='alert'
                  >
                    {register.response.error}
                  </div>
                ) : null}
                <label for='floatingInput'>Name</label>
                <div className='mb-3'>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    value={register.display_name}
                    onChange={e =>
                      setRegister(prev => ({
                        ...prev,
                        display_name: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <label for='floatingInput'>Email address</label>
                <div className='mb-3'>
                  <input
                    type='name'
                    className='form-control'
                    id='email'
                    placeholder='name@example.com'
                    value={register.user_email}
                    onChange={e =>
                      setRegister(prev => ({
                        ...prev,
                        user_email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <label for='floatingPassword'>Password</label>

                <div className='mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Password'
                    value={register.password}
                    onChange={e =>
                      setRegister(prev => ({
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
                <div>
                  <button className='w-100 btn btn-lg btn-primary' type='submit'>
                    Sign up
                  </button>
                </div>
                <hr className='my-4' />
                <small className='text-muted'>
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Register
