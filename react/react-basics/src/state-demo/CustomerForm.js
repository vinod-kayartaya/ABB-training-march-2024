import React, { useState } from 'react';

const CustomerForm = () => {
  console.log('CustomerForm rendered at', new Date());

  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    gender: 'Male',
    phone: '',
    email: '',
    city: '',
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target; // e.target is the textfield on which the event occured
    console.log('in changeHandler value is', value);
    setCustomer({ ...customer, [name]: value });
  };

  const validate = () => {
    // this returns an `errors` object
    const errors = {};
    const { firstname, email, phone } = customer;

    if (!firstname.trim()) {
      errors.firstname = 'firstname is required';
    }
    if (firstname.trim() && firstname.trim().length < 3) {
      errors.firstname = 'minium 3 letters required';
    }
    if (!email.trim()) {
      errors.email = 'email is required';
    }
    if (!phone.trim()) {
      errors.phone = 'phone is required';
    }

    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // validate the customer object
    // if invalid, errors should be displayed
    // and the control should skip the rest of the code

    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length) {
      return;
    }

    alert(`
    Firstname: ${customer.firstname} 
    Lastname: ${customer.lastname}
    Gender: ${customer.gender}
    Email: ${customer.email}
    Phone: ${customer.phone}
    City: ${customer.city}`);
  };

  return (
    <>
      <div className='container'>
        <h1>Using html form in React</h1>
        <hr />

        <h3>New customer details: </h3>

        <form style={{ width: '350px' }} onSubmit={submitHandler}>
          <div className='mb-3'>
            <label htmlFor='firstnameInput' className='form-label'>
              Firstname
            </label>
            <input
              type='text'
              value={customer.firstname}
              name='firstname'
              onChange={changeHandler}
              className='form-control'
              id='firstnameInput'
            />
            {errors.firstname && (
              <small className='text-danger'>{errors.firstname}</small>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='lastnameInput' className='form-label'>
              Lastname
            </label>
            <input
              type='text'
              value={customer.lastname}
              name='lastname'
              onChange={changeHandler}
              className='form-control'
              id='lastnameInput'
            />
          </div>

          <div className='mb-3'>
            <input
              type='radio'
              name='gender'
              id='genderMaleRadio'
              value='Male'
              onChange={changeHandler}
              checked={customer.gender === 'Male'}
              className='form-check-input me-2'
            />
            <label htmlFor='genderMaleRadio' className='form-check-label me-2'>
              Male
            </label>
            <input
              type='radio'
              name='gender'
              id='genderFemaleRadio'
              value='Female'
              onChange={changeHandler}
              checked={customer.gender === 'Female'}
              className='form-check-input me-2'
            />
            <label
              htmlFor='genderFemaleRadio'
              className='form-check-label me-2'
            >
              Female
            </label>
          </div>

          <div className='mb-3'>
            <label htmlFor='cityInput' className='form-label'>
              City
            </label>
            <input
              type='text'
              value={customer.city}
              name='city'
              onChange={changeHandler}
              className='form-control'
              id='cityInput'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='phoneInput' className='form-label'>
              Phone number
            </label>
            <input
              type='tel'
              value={customer.phone}
              name='phone'
              onChange={changeHandler}
              className='form-control'
              id='phoneInput'
            />
            {errors.phone && (
              <small className='text-danger'>{errors.phone}</small>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='emailInput' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              value={customer.email}
              name='email'
              onChange={changeHandler}
              className='form-control'
              id='emailInput'
            />
            {errors.email && (
              <small className='text-danger'>{errors.email}</small>
            )}
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomerForm;
