import React from 'react'

const VideoCard = ({templeName, temple_sub_heading, templeImage}) => {
    return (
        <>
            <div class="col-md-4 d-flex">
                <div class="blog-entry justify-content-end">
                    <div class="text">
                        <h3 class="heading">
                            <a href="#">
                                {templeName}
                            </a>
                        </h3>
                        <br />
                        <div
                            href="/"
                            class="block-20 img"
                            style={{ backgroundImage: `url(${templeImage})` }}
                        ></div>
                        <p>
                            {temple_sub_heading}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCard