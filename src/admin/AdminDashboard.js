import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AdminDashboard() {
  const [username, setUsername] = useState('');
  const [mostAsked, setMostAsked] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        setUsername(parsedData.username);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchMostAskedQuestions = async () => {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        console.error('No auth token found in localStorage');
        return;
      }

      try {
        const response = await fetch('https://vercel-bot-0ias.onrender.com/v1/admin/most-asked', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
          }
        });

        const data = await response.json();

        if (response.ok) {
          setMostAsked(data.data);
        } else {
          console.error('Error fetching most asked questions:', data.message);
        }
      } catch (error) {
        console.error('Network error while fetching most asked questions:', error);
      }
    };

    fetchMostAskedQuestions();
  }, []);

  const barChartData = {
    labels: mostAsked.map(item => item._id),
    datasets: [
      {
        label: 'Questions Asked',
        data: mostAsked.map(item => item.count),
        backgroundColor: [
          'rgba(0, 123, 255, 0.6)',
          'rgba(40, 167, 69, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(23, 162, 184, 0.6)',
          'rgba(255, 193, 7, 0.6)',
          'rgba(108, 117, 125, 0.6)'
        ],
        borderColor: [
          'rgba(0, 123, 255, 1)',
          'rgba(40, 167, 69, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(23, 162, 184, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(108, 117, 125, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 15
        },
      }
    },
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        {/* Hour chart */}
        <div className="card bg-transparent shadow-none border-0 mb-6">
          <div className="card-body row g-6 p-0 pb-5">
            <div className="col-12 col-md-8 card-separator">
              <h5 className="mb-2">Welcome back, <span className="h4 fw-semibold">{username ? username : 'Felecia'} 👋🏻</span></h5>
              <div className="col-12 col-lg-5">
                <p>Your progress this week is Awesome. Let's keep it up and get a lot of points reward!</p>
              </div>
            </div>
            <div className="col-12 col-md-4 ps-md-4 ps-lg-6">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">Time Spendings</h5>
                  <div className="time-spending-chart">
                    <h5 className="mb-2">231 <span className="text-body">h</span> 14 <span className="text-body">m</span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hour chart End */}

        {/* Topic and Instructors */}
        <div className="row mb-6 g-6">
          {/* Most Asked Questions */}
          <div className="col-12 col-xxl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title m-0 me-2">Most Asked Questions</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                {mostAsked.length > 0 ? (
                  mostAsked.map((item, index) => (
                    <li className="d-flex mb-4" key={index}>
                      <div className="avatar flex-shrink-0 me-4">
                        <span className="avatar-initial rounded-3 bg-label-primary">
                          <i className="ri-question-line ri-24px" />
                        </span>
                      </div>
                      <div className="d-sm-flex w-100 align-items-center">
                        <div className="w-100 mb-2 mb-sm-0 me-sm-4">
                          <h6 className="mb-0">{item._id}</h6>
                        </div>
                        <div className="badge bg-label-secondary rounded-pill">
                          {item.count} Times
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No data available</p>
                )}
              </ul>
            </div>
          </div>
        </div>
          {/* / Most Asked Questions */}
            <div className="col-md-6 col-xxl-4">
        <div className="card h-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <div className="card-title mb-0">
              <h5 className="m-0 me-2">Popular Chatbots</h5>
            </div>
            
          </div>
          <div className="px-5 py-4 border border-start-0 border-end-0">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-0 fs-xsmall text-uppercase fw-normal">Username</h6>
              <h6 className="mb-0 fs-xsmall text-uppercase fw-normal">Count</h6>
            </div>
          </div>
          <div className="card-body pt-5">
            <div className="d-flex justify-content-between align-items-center mb-6">
              <div className="d-flex align-items-center">
                <div className="avatar avatar me-4">
                  <img src="../../assets/img/avatars/1.png" alt="Avatar" className="rounded-circle" />
                </div>
                <div>
                  <div>
                    <h6 className="mb-0 text-truncate">Maven Analytics</h6>
                    <small className="text-truncate">Business Intelligence</small>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-0">33</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-6">
              <div className="d-flex align-items-center">
                <div className="avatar avatar me-4">
                  <img src="../../assets/img/avatars/2.png" alt="Avatar" className="rounded-circle" />
                </div>
                <div>
                  <div>
                    <h6 className="mb-0 text-truncate">Bentlee Emblin</h6>
                    <small className="text-truncate">Digital Marketing</small>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-0">52</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-6">
              <div className="d-flex align-items-center">
                <div className="avatar avatar me-4">
                  <img src="../../assets/img/avatars/3.png" alt="Avatar" className="rounded-circle" />
                </div>
                <div>
                  <div>
                    <h6 className="mb-0 text-truncate">Benedetto Rossiter</h6>
                    <small className="text-truncate">UI/UX Design</small>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-0">12</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="avatar avatar me-4">
                  <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                </div>
                <div>
                  <div>
                    <h6 className="mb-0 text-truncate">Beverlie Krabbe</h6>
                    <small className="text-truncate">React Native</small>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <h6 className="mb-0">8</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      
      <div className="content-backdrop fade" />
    </div>
  );
}








  {/*/ Popular Instructors */}
      {/* Top Courses */}
    //  <div className="col-12 col-xxl-4 col-md-6">
    //     <div className="card h-100">
    //       <div className="card-header d-flex align-items-center justify-content-between">
    //         <h5 className="card-title m-0 me-2">Top Courses</h5>
    //         <div className="dropdown">
    //           <button className="btn btn-text-secondary rounded-pill text-muted border-0 p-1" type="button" id="topCourses" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             <i className="ri-more-2-line ri-20px" />
    //           </button>
    //           <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topCourses">
    //             <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
    //             <a className="dropdown-item" href="javascript:void(0);">Download</a>
    //             <a className="dropdown-item" href="javascript:void(0);">View All</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card-body">
    //         <ul className="list-unstyled mb-0">
    //           <li className="d-flex mb-7">
    //             <div className="avatar flex-shrink-0 me-4">
    //               <span className="avatar-initial rounded-3 bg-label-primary"><i className="ri-vidicon-line ri-24px" /></span>
    //             </div>
    //             <div className="d-sm-flex w-100 align-items-center">
    //               <div className="w-100 mb-2 mb-sm-0 me-sm-4">
    //                 <h6 className="mb-0">Videography Basic Design Course</h6>
    //               </div>
    //               <div className="badge bg-label-secondary rounded-pill">1.2k Views</div>
    //             </div>
    //           </li>
    //           <li className="d-flex mb-7">
    //             <div className="avatar flex-shrink-0 me-4">
    //               <span className="avatar-initial rounded-3 bg-label-info"><i className="ri-code-fill ri-24px" /></span>
    //             </div>
    //             <div className="d-sm-flex w-100 align-items-center">
    //               <div className="w-100 mb-2 mb-sm-0 me-sm-4">
    //                 <h6 className="mb-0">Basic Front-end Development Course</h6>
    //               </div>
    //               <div className="badge bg-label-secondary rounded-pill">834 Views</div>
    //             </div>
    //           </li>
    //           <li className="d-flex mb-7">
    //             <div className="avatar flex-shrink-0 me-4">
    //               <span className="avatar-initial rounded-3 bg-label-success"><i className="ri-image-2-line ri-24px" /></span>
    //             </div>
    //             <div className="d-sm-flex w-100 align-items-center">
    //               <div className="w-100 mb-2 mb-sm-0 me-sm-4">
    //                 <h6 className="mb-0">Basic Fundamentals of Photography</h6>
    //               </div>
    //               <div className="badge bg-label-secondary rounded-pill">3.7k Views</div>
    //             </div>
    //           </li>
    //           <li className="d-flex mb-7">
    //             <div className="avatar flex-shrink-0 me-4">
    //               <span className="avatar-initial rounded-3 bg-label-warning"><i className="ri-palette-line ri-24px" /></span>
    //             </div>
    //             <div className="d-sm-flex w-100 align-items-center">
    //               <div className="w-100 mb-2 mb-sm-0 me-sm-4">
    //                 <h6 className="mb-0">Advance Dribble Base Visual Design</h6>
    //               </div>
    //               <div className="badge bg-label-secondary rounded-pill">2.5k Views</div>
    //             </div>
    //           </li>
    //           <li className="d-flex">
    //             <div className="avatar flex-shrink-0 me-4">
    //               <span className="avatar-initial rounded-3 bg-label-danger"><i className="ri-music-2-line ri-24px" /></span>
    //             </div>
    //             <div className="d-sm-flex w-100 align-items-center">
    //               <div className="w-100 mb-2 mb-sm-0 me-sm-4">
    //                 <h6 className="mb-0">Your First Singing Lesson</h6>
    //               </div>
    //               <div className="badge bg-label-secondary rounded-pill">948 Views</div>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div> 
      {/*/ Top Courses */}
      {/* Upcoming Webinar */}
      {/* <div className="col-12 col-xxl-4 col-md-6">
        <div className="card h-100">
          <div className="card-body">
            <div className="bg-label-primary text-center mb-6 pt-2 rounded-3">
              <img className="img-fluid w-px-150" src="../../assets/img/illustrations/faq-illustration.png" alt="Boy card image" />
            </div>
            <h5 className="mb-1">Upcoming Webinar</h5>
            <p className="mb-6">Next Generation Frontend Architecture Using Layout Engine And React Native Web.</p>
            <div className="row mb-6 g-4">
              <div className="col-6">
                <div className="d-flex">
                  <div className="avatar flex-shrink-0 me-4">
                    <span className="avatar-initial rounded-3 bg-label-primary"><i className="ri-calendar-line ri-24px" /></span>
                  </div>
                  <div>
                    <h6 className="mb-0 text-nowrap fw-normal">17 Nov 23</h6>
                    <small>Date</small>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <div className="avatar flex-shrink-0 me-4">
                    <span className="avatar-initial rounded-3 bg-label-primary"><i className="ri-time-line ri-24px" /></span>
                  </div>
                  <div>
                    <h6 className="mb-0 text-nowrap fw-normal">32 minutes</h6>
                    <small>Duration</small>
                  </div>
                </div>
              </div>
            </div>
            <a href="javascript:void(0);" className="btn btn-primary w-100">Join the event</a>
          </div>
        </div>
      </div> */}
      {/*/ Upcoming Webinar */}
      {/* Assignment Progress */}
      {/* <div className="col-12 col-xxl-4 col-md-6">
        <div className="card h-100">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h5 className="card-title m-0 me-2">Assignment Progress</h5>
            <div className="dropdown">
              <button className="btn btn-text-secondary rounded-pill text-muted border-0 p-1" type="button" id="assignProgress" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ri-more-2-line ri-20px" />
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="assignProgress">
                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                <a className="dropdown-item" href="javascript:void(0);">Download</a>
                <a className="dropdown-item" href="javascript:void(0);">View All</a>
              </div>
            </div>
          </div>
          <div className="card-body pt-5">
            <ul className="p-0 m-0">
              <li className="d-flex mb-8">
                <div className="chart-progress me-4" data-color="primary" data-series={72} data-progress_variant="true" />
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">User experience Design</h6>
                      <p className="mb-0 small">120 Tasks</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon bg-label-secondary">
                      <i className="ri-arrow-right-s-line ri-20px scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-8">
                <div className="chart-progress me-4" data-color="success" data-series={48} data-progress_variant="true" />
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">Basic fundamentals</h6>
                      <p className="mb-0 small">32 Tasks</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon bg-label-secondary">
                      <i className="ri-arrow-right-s-line ri-20px scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
              <li className="d-flex mb-8">
                <div className="chart-progress me-4" data-color="danger" data-series={15} data-progress_variant="true" />
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">React native components</h6>
                      <p className="mb-0 small">182 Tasks</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon bg-label-secondary">
                      <i className="ri-arrow-right-s-line ri-20px scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <div className="chart-progress me-4" data-color="info" data-series={24} data-progress_variant="true" />
                <div className="row w-100 align-items-center">
                  <div className="col-9">
                    <div className="me-2">
                      <h6 className="mb-2">Basic of music theory</h6>
                      <p className="mb-0 small">56 Tasks</p>
                    </div>
                  </div>
                  <div className="col-3 text-end">
                    <button type="button" className="btn btn-sm btn-icon bg-label-secondary">
                      <i className="ri-arrow-right-s-line ri-20px scaleX-n1-rtl" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      {/*/ Assignment Progress */}