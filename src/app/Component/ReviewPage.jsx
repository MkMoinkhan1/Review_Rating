import React from 'react'
import '../styles/reviewpage.css'

import graffars from "../assets/graffersID.jpg"


const ReviewPage = () => {
  return (
    <>
    <section>
      <div className="review-center">
        <div className="review-company">
          <div className="review-companyImg">
            <img src={graffars} alt="company" />
          </div>
          <div className="review-companyInfo">
            <p className='review-p'>Founded 2016</p>
            <h1 style={{ fontSize: "1.5rem" }}>
              GraffersID Web and App Development
            </h1>
            <p className='review-p'>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#7910de" ,margin:'0px 5px'}}
              />
              816 Shekhar Central Palasia, Square, Manorama Ganj, Indore,(M.P.)
            </p>
            <div className="review-starRating">
              <span
                style={{
                  fontWeight: "bolder",
                  color: "black",
                  fontSize: "1.2rem"
                }}
              >
                5
              </span>
              <div className="review-rate">
                <input type="radio" id="star5" name="rate" defaultValue={5} />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" defaultValue={4} />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" defaultValue={3} />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" defaultValue={2} />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" defaultValue={1} />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
              <span>54 Reviews</span>
            </div>
          </div>
          <div className="review-btnarea">
            <button className="review-btn">+ Add Reviews</button>
          </div>
        </div>
        <div className="review-userReviews">
          <div className="review-userInfo">
            <div className="review-avtar1"></div>
            <div className="review-userName">
              <h4>Khabib Nurmagomedov</h4>
              <p className='review-p'>22/03/122</p>
              <p className='review-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                dolore ex tempora illum deleniti molestias perferendis quisquam
                veniam, ad tenetur nam facere velit asperiores, minus laboriosam
                ea! Rem, dignissimos in!Lorem Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ut enim nesciunt quo rem eos
                sapiente excepturi iure, et aliquid nobis dolor sint accusamus
                repudiandae suscipit! Eum delectus reprehenderit ut animi.
              </p>
            </div>
            <div className="review-userStar">
              <div className="review-starRating">
                <div className="review-rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="review-userInfo">
            <div className="review-avtar2"></div>
            <div className="review-userName">
              <h4>Islam Makhachev</h4>
              <p className='review-p'>22/03/122</p>
              <p className='review-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                dolore ex tempora illum deleniti molestias perferendis quisquam
                veniam, ad tenetur nam facere velit asperiores, minus laboriosam
                ea! Rem, dignissimos in!Lorem Lorem ipsum,
              </p>
            </div>
            <div className="review-userStar">
              <div className="review-starRating">
                <div className="review-rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="review-userInfo">
            <div className="review-avtar3"></div>
            <div className="review-userName">
              <h4>Khamzat Chimaev</h4>
              <p className='review-p'>22/03/122</p>
              <p className='review-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                dolore ex tempora illum deleniti molestias{" "}
              </p>
            </div>
            <div className="review-userStar">
              <div className="review-starRating">
                <div className="review-rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ReviewPage