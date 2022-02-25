import React from 'react'

import Layout from '../components/layout'

const Rent = () => {
  return (
    <Layout>
      <div>
        <div >
          <div className='w-100 col-md-8 p-2 d-flex justify-content-center pb-8'>
            <div className='tab-content'>
              <h1>Rent</h1>
              <form>
                <div className='mb-2'>
                  <label for='floatingInput'>Name</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label for='floatingInput'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='name@example.com'
                    required
                  />
                </div>
                <div className=' mb-2'>
                  <label for='floatingPassword'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='Password'
                    placeholder='Password'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label for='floatingInput'>Phone</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label for='floatingInput'>Type of Machine</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label for='floatingInput'>Quantity</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label for='floatingInput'>Location of use</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label for='floatingInput'>Date & Time</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    required
                  />
                </div>
                <div className='mb-2'>
                  <label for='floatingInput'>Duration of use</label>
                  <input
                    type='name'
                    className='form-control'
                    id='name'
                    placeholder='name'
                    required
                  />
                </div>
                <label for='floatingInput'>Transport Required</label>
                <div className='mb-2'>
                  <div class='form-check form-check-inline'>
                    <input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option1' />
                    <label class='form-check-label' for='inlineRadio1'>Delivery</label>
                  </div>
                  <div class='form-check form-check-inline'>
                    <input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='option2' />
                    <label class='form-check-label' for='inlineRadio2'>Pick up</label>
                  </div>
                </div>
                <div class='form-outline'>
                  <textarea class='form-control is-valid' id='validationTextarea' placeholder='Required example textarea' required=''></textarea>
                  <label for='validationTextarea' class='form-label' >Remark</label>
                  <div class='invalid-feedback'>Please enter a message in the textarea.</div>
                  <div class='form-notch'><div class='form-notch-leading'></div><div class='form-notch-middle'></div><div class='form-notch-trailing'></div></div></div>
                <button className='w-100 btn btn-lg btn-warning' type='submit'>
                  Submmit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Rent
