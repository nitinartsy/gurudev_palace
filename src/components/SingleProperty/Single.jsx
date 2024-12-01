import Link from "next/link";
import React from "react";

const Single = () => {
  return (
    <>
      {" "}
      <section
        class="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight"
        style={{
          background: `linear-gradient(to bottom, black, transparent), url('/images/bg_1.jpg')`,
        }}
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <p class="breadcrumbs">
                <span class="mr-2">
                  <Link href="/">
                    Home <i class="ion-ios-arrow-forward"></i>
                  </Link>
                </span>{" "}
                <span>
                  Properties <i class="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 class="mb-3 bread">Properties Single</h1>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="curved-separator"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,165.3C672,181,768,203,864,224C960,245,1056,267,1152,229.3C1248,192,1344,96,1392,48L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <section class="ftco-section ftco-property-details">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="property-details">
                <div
                  class="img"
                  style={{ backgroundImage: `url(/images/work-1.jpg)` }}
                ></div>
                <div class="text text-center">
                  <span class="subheading">DUBAI</span>
                  <h2>Marina Beach resorts</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 pills">
              <div class="bd-example bd-example-tabs">
                <div class="d-flex justify-content-center">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="pills-description-tab"
                        data-toggle="pill"
                        href="#pills-description"
                        role="tab"
                        aria-controls="pills-description"
                        aria-expanded="true"
                      >
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-manufacturer-tab"
                        data-toggle="pill"
                        href="#pills-manufacturer"
                        role="tab"
                        aria-controls="pills-manufacturer"
                        aria-expanded="true"
                      >
                        Description
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-review-tab"
                        data-toggle="pill"
                        href="#pills-review"
                        role="tab"
                        aria-controls="pills-review"
                        aria-expanded="true"
                      >
                        Review
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-description"
                    role="tabpanel"
                    aria-labelledby="pills-description-tab"
                  >
                    <div class="row">
                      <div class="col-md-4">
                        <ul class="features">
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Lot Area:
                            1,250 SQ FT
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Bed Rooms: 4
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Bath Rooms: 4
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Luggage
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Garage: 2
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <ul class="features">
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Floor Area:
                            1,300 SQ FT
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Year Build::
                            2019
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Water
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Stories: 2
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Roofing: New
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <ul class="features">
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Floor Area:
                            1,300 SQ FT
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Year Build::
                            2019
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Water
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Stories: 2
                          </li>
                          <li class="check">
                            <span class="ion-ios-checkmark"></span>Roofing: New
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-manufacturer"
                    role="tabpanel"
                    aria-labelledby="pills-manufacturer-tab"
                  >
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name of Lorem
                      Ipsum decided to leave for the far World of Grammar.
                    </p>
                    <p>
                      When she reached the first hills of the Italic Mountains,
                      she had a last view back on the skyline of her hometown
                      Bookmarksgrove, the headline of Alphabet Village and the
                      subline of her own road, the Line Lane. Pityful a rethoric
                      question ran over her cheek, then she continued her way.
                    </p>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-review"
                    role="tabpanel"
                    aria-labelledby="pills-review-tab"
                  >
                    <div class="row">
                      <div class="col-md-7">
                        <h3 class="head">23 Reviews</h3>
                        <div class="review d-flex">
                          <div
                            class="user-img"
                            style={{
                              backgroundImage: `url(/images/person_1.jpg)`,
                            }}
                          ></div>
                          <div class="desc">
                            <h4>
                              <span class="text-left">Jacob Webb</span>
                              <span class="text-right">14 March 2018</span>
                            </h4>
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                              </span>
                              <span class="text-right">
                                <a href="#" class="reply">
                                  <i class="icon-reply"></i>
                                </a>
                              </span>
                            </p>
                            <p>
                              When she reached the first hills of the Italic
                              Mountains, she had a last view back on the skyline
                              of her hometown Bookmarksgrov
                            </p>
                          </div>
                        </div>
                        <div class="review d-flex">
                          <div
                            class="user-img"
                            style={{
                              backgroundImage: `url(/images/person_2.jpg)`,
                            }}
                          ></div>
                          <div class="desc">
                            <h4>
                              <span class="text-left">Jacob Webb</span>
                              <span class="text-right">14 March 2018</span>
                            </h4>
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                              </span>
                              <span class="text-right">
                                <a href="#" class="reply">
                                  <i class="icon-reply"></i>
                                </a>
                              </span>
                            </p>
                            <p>
                              When she reached the first hills of the Italic
                              Mountains, she had a last view back on the skyline
                              of her hometown Bookmarksgrov
                            </p>
                          </div>
                        </div>
                        <div class="review d-flex">
                          <div
                            class="user-img"
                            style={{
                              backgroundImage: `url(/images/person_3.jpg)`,
                            }}
                          ></div>
                          <div class="desc">
                            <h4>
                              <span class="text-left">Jacob Webb</span>
                              <span class="text-right">14 March 2018</span>
                            </h4>
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                              </span>
                              <span class="text-right">
                                <a href="#" class="reply">
                                  <i class="icon-reply"></i>
                                </a>
                              </span>
                            </p>
                            <p>
                              When she reached the first hills of the Italic
                              Mountains, she had a last view back on the skyline
                              of her hometown Bookmarksgrov
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <div class="rating-wrap">
                          <h3 class="head">Give a Review</h3>
                          <div class="wrap">
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                (98%)
                              </span>
                              <span>20 Reviews</span>
                            </p>
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                (85%)
                              </span>
                              <span>10 Reviews</span>
                            </p>
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                (70%)
                              </span>
                              <span>5 Reviews</span>
                            </p>
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                (10%)
                              </span>
                              <span>0 Reviews</span>
                            </p>
                            <p class="star">
                              <span>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                (0%)
                              </span>
                              <span>0 Reviews</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single;
