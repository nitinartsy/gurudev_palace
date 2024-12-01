import Link from 'next/link';
import React from 'react'

const Blog = () => {
  return (
    <>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5">
            <div class="col-md-7 heading-section text-center">
              <span class="subheading">our Blog</span>
              <h2>Some Latest Articles</h2>
            </div>
          </div>
          <div class="row d-flex">
            <div class="col-md-4 d-flex">
              <div class="blog-entry justify-content-end">
                <div class="text">
                  <h3 class="heading">
                    <a href="#">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <div class="meta mb-3">
                    <div>
                      <a href="#">July. 24, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/"
                    class="block-20 img"
                    style={{ backgroundImage: `url('/images/image_2.jpg')` }}
                  ></Link>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="blog-entry justify-content-end">
                <div class="text">
                  <h3 class="heading">
                    <a href="#">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <div class="meta mb-3">
                    <div>
                      <a href="#">July. 24, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/"
                    class="block-20 img"
                    style={{ backgroundImage: `url('/images/image_3.jpg')` }}
                  ></Link>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <div class="blog-entry justify-content-end">
                <div class="text">
                  <h3 class="heading">
                    <a href="#">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <div class="meta mb-3">
                    <div>
                      <a href="#">July. 24, 2019</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/"
                    class="block-20 img"
                    style={{ backgroundImage: `url('/images/image_4.jpg')` }}
                  ></Link>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. A small river named Duden
                    flows by their place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="heading-section text-center">
            <Link href="/" class="text-center cta cta-gold">
              Read All Blogs <span class="ion-ios-arrow-round-right"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog
