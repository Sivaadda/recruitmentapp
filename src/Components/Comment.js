import './Comment.css';
function Comment(){
    return(
        <div>
            <div className="container my-5">
        <div className="row justify-content-center">
            <div className='row justify-content-center col-md-11'>
          <div className="col-md-3">
            <div className="review-box">
              <div className="d-flex flex-column align-items-center">
                <img src="https://tse4.mm.bing.net/th?id=OIP.c0GTqHSPgp9rz7Pn2Aw_8wHaF7&pid=Api&P=0&h=180" alt="Person 1" className="img-fluid image-c m-3" style={{ width: '100px', height: '100px' }} />
                <div>
                 <p>"Dream Job is an excellent platform for job seekers! The user-friendly interface made it effortless to browse through numerous job listings. I applied for a few positions, and the response time from recruiters was surprisingly quick. Within a few days, I received interview calls from top companies. Highly recommended!" </p> <p>- John Smith </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="review-box">
              <div className="d-flex flex-column align-items-center">
                <img src="https://tse4.mm.bing.net/th?id=OIP.2N8u_UiTR-l67y0dH03RFgHaHa&pid=Api&P=0&h=180" alt="Person 2" className="img-fluid  m-3" style={{ width: '100px', height: '100px' }} />
                <div>
                  
                  <p>"Dream Job is a fantastic platform for aspiring data scientists like me. The job search filters allowed me to narrow down my options based on my preferred location and job type. The 'Write Test and Submit' feature gave me an opportunity to showcase my skills, and I was thrilled to receive interview invitations from multiple companies within a week!"</p> <p>- Emily Chen</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="review-box">
              <div className="d-flex flex-column align-items-center">
                <img src="https://tse1.mm.bing.net/th?id=OIP.SGqq783QvFBS6N22mPKmPAHaJQ&pid=Api&P=0&h=180" alt="Person3" className="img-fluid  m-3" style={{ width: '100px', height: '100px' }} />
                <div>
                  
                  <p >"As a software engineer, I found Dream Job to be a game-changer in my job search. The variety of job opportunities available on the platform is impressive. The option to apply with my Google account saved me time, and the process was seamless. Thanks to Dream Job, I landed my dream job with a leading tech company!"</p> <p> - Sarah Johnson</p>
                </div>
              </div>
            </div>
          </div>
          
          </div>
         
        </div>
      </div>
        </div>
    );
}
export default Comment;