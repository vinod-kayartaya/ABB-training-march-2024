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

  const changeHandler = (e) => {
    const { name, value } = e.target; // e.target is the textfield on which the event occured
    console.log('in changeHandler value is', value);
    setCustomer({ ...customer, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`
    Firstname: ${customer.firstname} 
    Lastname: ${customer.lastname}
    Gender: ${customer.gender}
    Email: ${customer.email}
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

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>

        {JSON.stringify(customer)}
      </div>
    </>
  );
};

export default CustomerForm;
