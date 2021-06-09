import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from 'react';
import Select from 'react-select'
import moment from "moment";


export default function SectionMajor({ majors,session_DT,oM,oS }) {
    enum sessionDateTime {
      session_DT
    }
     
    enum majorList {
      majors
    }
    const [isFValid, setFIsValid]=useState(true);
    const [isLValid, setLIsValid]=useState(true);
    const [isEValid, setEIsValid]=useState(true);
    const [isPValid, setPIsValid]=useState(true);
    const [isSValid, setSIsValid]=useState(true);
    interface IFormInput {
      FirstName: string;
      LastName: string;
      emailaddress: string;
      PhoneNumber: string;
      sessionDT: sessionDateTime;
      majors: majorList;
    }
    function onChange(isVisible,inputName) {
      if(isVisible && inputName === "FirstName")
      {
        setFIsValid(false)
      }
      else if(!isVisible && inputName === "FirstName")
      {
        setFIsValid(true)
      }
      if(isVisible && inputName === "LastName")
      {
        setLIsValid(false)
      }
      else if(!isVisible && inputName === "LastName")
      {
        setLIsValid(true)
      }
      if(isVisible && inputName === "emailaddress")
      {
        setEIsValid(false)
      }
      else if(!isVisible && inputName === "emailaddress")
      {
        setEIsValid(true)
      }
      if(isVisible && inputName === "PhoneNumber")
      {
        setPIsValid(false)
      }
      else if(!isVisible && inputName === "PhoneNumber")
      {
        setPIsValid(true)
      }
      if(isVisible && inputName === "sessionDT")
      {
        setSIsValid(false)
      }
      else if(!isVisible && inputName === "sessionDT")
      {
        setSIsValid(true)
      }
    }
    const { handleSubmit, control, reset,formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput>  = data => console.log(data);

    
  return (
      <section className="book-session-section section padding-top-50 padding-bottom-50" id="book-session">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 content">
                    <h2 className="margin-bottom-20">Book a Zoom Session</h2>
                    <img src="/assets/zoom-session.jpg" width={578} height={350} className="img-fluid" />
                    <p className="text-font sliver-box-zoom-session"> Would you like to know more about SCD ? We are here to assist you and answer all your questions. Book a session and our team will clarify and introduce you to SCD majors, student life and admission procedure. You are one step closer from starting a creative career . </p>
                </div>
                <div className="col-lg-6 content bookZoomBox">
                  <h3 className="margin-bottom-20">Join Us</h3>
                  {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-5">
                        <div className="form-style">
                          <div className={`form-group required ${isFValid? 'valid' : 'invalid'}`}>
                            <Controller
                              name="FirstName"
                              control={control}
                              rules={{ required: true,pattern: /^[A-Za-z]+$/i }}
                              render={({ field }) => <input className="form-control" onChange={onChange(errors.FirstName,"FirstName")}  name="FirstName" id="FirstName"  type="text"  placeholder="First name"  {...field} />}
                            />
                            
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            <span className="error-text">{errors.FirstName?.type === 'required' && "First name is required"}{errors.FirstName?.type === 'pattern' && "only alphabits is accepted"}</span>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-5">
                        <div className="form-style">
                          <div className={`form-group required ${isLValid? 'valid' : 'invalid'}`}>
                            <Controller
                              name="LastName"
                              control={control}
                              rules={{ required: true,pattern: /^[A-Za-z]+$/i }}
                              render={({ field }) => <input className="form-control" onChange={onChange(errors.LastName,"LastName")}  name="LastName" id="LastName"  type="text"  placeholder="Last name"  {...field} />}
                            />
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            <span className="error-text">{errors.LastName?.type === 'required' && "Last name is required"}{errors.LastName?.type === 'pattern' && "only alphabits is accepted"}</span>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-5">
                        <div className="form-style">
                          <div className={`form-group required ${isEValid? 'valid' : 'invalid'}`}>
                            <Controller
                              name="emailaddress"
                              control={control}
                              rules={{ required: true,pattern:  /^\S+@\S+\.\S+$/}}
                              render={({ field }) => <input className="form-control" onChange={onChange(errors.emailaddress,"emailaddress")}  name="emailaddress" id="emailaddress"  type="text"  placeholder="Email Address"  {...field} />}
                            />
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            <span className="error-text">{errors.emailaddress?.type === 'required' && "Email Address is required"}{errors.emailaddress?.type === 'pattern' && "Email format incorrect xxx@xxx.com"}</span>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-5">
                        <div className="form-style">
                          <div className={`form-group required ${isPValid? 'valid' : 'invalid'}`}>
                            <Controller
                              name="PhoneNumber"
                              control={control}
                              rules={{ required: true,pattern: /^(\+?)([0-9] ?){9,20}$/ }}
                              render={({ field }) => <input className="form-control" onChange={onChange(errors.PhoneNumber,"PhoneNumber")}  name="PhoneNumber" id="PhoneNumber"  type="text"  placeholder="Phone Number"  {...field} />}
                            />
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            <span className="error-text">{errors.PhoneNumber?.type === 'required' && "Phone Number is required"}{errors.PhoneNumber?.type === 'pattern' && "Phone number format incorrect 0096899xxxxxx"}</span>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-5">
                        <div className="form-style">
                          <div className={`form-group required ${isSValid? 'valid' : 'invalid'}`}>
                            <Controller
                              name="majors"
                              control={control}
                            
                              render={({ field }) =>
                              <Select className="basic-single" classNamePrefix="select" placeholder="Select Major" isClearable={true} isSearchable={true} name="sessionDT" options={oM} {...field}/>
                                }
                              
                            />
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            <span className="error-text">{errors.sessionDT?.type === 'required' && "Phone Number is required"}</span>
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-5">
                        <div className="form-style">
                          <div className={`form-group required ${isSValid? 'valid' : 'invalid'}`}>
                            <Controller
                              name="sessionDT"
                              control={control}
                            
                              render={({ field }) =>
                                <Select className="basic-single" classNamePrefix="select" placeholder="Select Session" isClearable={true} isSearchable={true} name="sessionDT" options={oS} {...field}/>
                                }
                              
                            />
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            <span className="error-text">{errors.sessionDT?.type === 'required' && "Phone Number is required"}</span>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="main-btn book-session-btn">Book</button>
                  {/* </form> */}
              </div>
              </div>
          </div>
      </section>
  )
}
