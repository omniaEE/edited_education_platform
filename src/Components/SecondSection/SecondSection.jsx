import React from "react";
import Style from "./SecondSection.module.css";
import { useMediaQuery } from "react-responsive";

export default function SecondSection() {
  const isScreenSmall = useMediaQuery({ maxWidth: 576 });
  const data = [
    { value: '15K+', label: 'Students' },
    { value: '75%', label: 'Total Success' },
    { value: '35', label: 'Main Questions' },
    { value: '26', label: 'Chief Experts' },
    { value: '12', label: 'Years of Experience' },
  ];

  const featureData = [
    {
      icon: 'fa-regular fa-newspaper',
      title: 'Online Billing, Invoicing, & Contracts.',
      description:
        'Simple and secure control of your organization\'s financial and legal transactions. Send customized invoices and contracts.',
    },
    {
      icon: 'fa-solid fa-calendar-days',
      title: 'Easy Scheduling & Attendance Tracking.',
      description:
        'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.',
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Customer Tracking.',
      description:
        'Automate and track emails to individuals or groups. Skilline\'s built-in system helps organize your organization.',
    },
  ];

  return (
    <>
      <div className="container ">
    {/* second section content */}

        <div className="justify-content-center pt-3 d-flex flex-column flex-md-row">
          <div className="col-md-5 px-5 text-center">
            <h3>
              Our <span className="text-color">Success</span>
            </h3>
            <p className="small-font px-3 pt-2">
              Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
              sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
              ultrices eu ornare tristique vel nisl orci.
            </p>
          </div>
        </div>

        <div className="justify-content-center py-5 d-flex flex-column flex-md-row">
          {data.map((item, index) => (
            <div key={index} className="col-md-2 d-flex flex-column align-items-center">
              <h1 className={`${Style.gradcolor} ${isScreenSmall ? 'display-1' : 'display-3'} m-0`}>
                {item.value}
              </h1>
              <div className="d-flex justify-content-center">
                <p className={`${isScreenSmall ? 'fs-2 mb-4' : ''}`}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`row justify-content-center ${isScreenSmall ? "" : "pb-5"}`}
        >
          <div className="col-md-5 text-center">
            <h3 className="fw-bold">
              All-In-One <span className="text-color">Cloud Software</span>
            </h3>
            <p className="font-sm gray-text">
              USAM is one powerful online software suite that combines all the
              tools needed to run a successful school or office.
            </p>
          </div>
        </div>

        <div className=" m-5 justify-content-center d-flex flex-column flex-md-row">
          {featureData.map((item, index) => (
            <div
              key={index}
              className={`${Style.shadowbox} col-md-3 p-4 d-flex flex-column align-items-center rounded-3 text-center ${isScreenSmall ? 'my-5' : 'mx-5'
                }`}
            >
              <div className="rounded-5 bg-black d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                <i className={`text-white ${item.icon} fs-4`}></i>
              </div>
              <div className="mt-5 px-3 text-color">
                <h5 className="fw-bold">{item.title}</h5>
                <p className="font-sm gray-text mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
