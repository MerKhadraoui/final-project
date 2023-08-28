import React, { useContext, useState } from 'react'
import "./bodyAboutUs.css"
import { NavLink } from "react-router-dom"
function BodyAboutUs() {

    return (
        <div>
            <> <div className='bodyAboutUs-info' >
                <h5 className="h5 white">
                    <p>We believe that in a decade the financial system of the internet — that is, commerce that happens on the internet — will be the largest financial system in the world. And it will be powered by crypto.</p>
                    <p>"SEMM-DV-Cryptos_Space" enabled anyone to not only examine transactions and study the blockchain, but it is also an API that enabled companies to build on Bitcoin. We also have provided the most popular and widely used crypto wallet that enables anyone anywhere to control their own money.</p>
                    <p>Our team spans the globe and has worked tirelessly to accelerate the adoption of crypto and usher in the future of finance. We are passionate, relentless, and stoked - and believe that a lean team of world-class visionaries can ship products that empower our customers and drive the business to new heights.</p>

                </h5>
                <button class="css-17n7ew6">
                    <p class="css-27iy77">
                        <NavLink to="/register" >
                            Start to Jorney
                        </NavLink>
                    </p>
                    <div class="css-ve18x2">
                        <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 7h12M6 1l6 6-6 6" stroke="currentColor" stroke-width="2"></path>
                        </svg>
                    </div>
                </button>

            </div>
            </>
        </div>
    )
}

export default BodyAboutUs
