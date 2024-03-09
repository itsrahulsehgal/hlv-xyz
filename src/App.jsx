import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page_wrapper page_dark">
        <div className="html_global w-embed">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.4/swiper-bundle.css"
          />
        </div>
        <div className="img-noise" />
        <div className="main_wrapper">
          <div className="navbar-blur" />
          <div className="section s-nav">
            <div
              data-animation="default"
              data-collapse="none"
              data-duration={400}
              data-easing="ease"
              data-easing2="ease"
              role="banner"
              className="navbar w-nav"
            >
              <div className="container">
                <div className="c-navigation">
                  <a
                    href="index.html"
                    aria-current="page"
                    className="img_brand_nav w-inline-block w--current"
                  >
                    <img
                      src="https://assets-global.website-files.com/637250d4decbdf2920394a03/659c2708369f13febfd104e6_hlv-light.png"
                      loading="eager"
                      sizes="(max-width: 479px) 7vw, (max-width: 767px) 27.5625px, 38.59375px"
                      srcSet="https://assets-global.website-files.com/637250d4decbdf2920394a03/659c2708369f13febfd104e6_hlv-light-p-500.png 500w, https://assets-global.website-files.com/637250d4decbdf2920394a03/659c2708369f13febfd104e6_hlv-light.png 590w"
                      alt=""
                      className="img_brand"
                    />
                  </a>
                  <nav role="navigation" className="nav-menu w-nav-menu">
                    <div className="socials-parent">
                      <div className="c-socials">
                        <a
                          href="https://twitter.com/HLV_XYZ"
                          target="_blank"
                          className="footer_social twitter w-inline-block"
                        >
                          <div className="w-embed">
                            <svg
                              width="100%"
                              style={{ maxWidth: "100%", maxHeight: "100%" }}
                              viewBox="0 0 16 14"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://hlv-xyz.medium.com/"
                          target="_blank"
                          className="footer_social medium w-inline-block"
                        >
                          <div className="w-embed">
                            <svg
                              width={30}
                              height={18}
                              viewBox="0 0 30 18"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/company/horizen-labs-ventures/"
                          target="_blank"
                          className="footer_social w-inline-block"
                        >
                          <div className="w-embed">
                            <svg
                              width="100%"
                              style={{ maxWidth: "100%", maxHeight: "100%" }}
                              viewBox="0 0 14 14"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <a
                      data-w-id="58c130a3-7ca6-9401-c423-aca10c73c38a"
                      href="index.html#"
                      className="button button--nav w-inline-block"
                    >
                      <div>contact us</div>
                      <div className="noise-button" />
                    </a>
                  </nav>
                  <div className="w-nav-button">
                    <div className="w-icon-nav-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="0e88a75d-5e6f-be2e-ab76-35345ddcc7b5"
            className="section s-home-v1"
          >
            <div className="container c-hero">
              <div className="c-home-v1">
                <h1
                  data-w-id="26b3f65c-4161-b6b3-47d5-c80f7860e28f"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                  className="h1-hero"
                >
                  The Web3 advisory and solutions platform
                </h1>
                <p
                  data-w-id="290573ff-f217-f1d5-9c3e-49a9dda9297f"
                  style={{
                    opacity: 1,
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                  }}
                >
                  Pushing the boundaries of what's possible.
                </p>
              </div>

            </div>
            <div className="c-home-accents">
              <div
                data-w-id="4a2383f2-362b-2c44-9c9b-d965b18f0339"
                style={{ opacity: 0 }}
                className="img_gradient"
              />
              <div
                data-w-id="75fde432-7f3d-3769-412a-02167d970d80"
                className="img_glare_parent"
              >
                <div id="glare-overlay" className="img_glare" />
              </div>
            </div>
            <div className="c-spacer-parent">
              <div className="c-spacer-home-v1">
                <img
                  className="img_homev1-logo"
                  src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63ceee3a28066f39cb8310eb_img_homelogo_02.webp"
                  width={1069}
                  alt=""

                />
                <img
                  src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom.webp"
                  loading="eager"
                  data-w-id="045abd5c-92f2-f223-58d6-b8c8d5d8dd39"
                  sizes="100vw"
                  alt=""
                  srcSet="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-500.webp 500w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-800.webp 800w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-1080.webp 1080w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-1600.webp 1600w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom-p-2000.webp 2000w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270962d9abe8a30a40e7_Bottom.webp 2880w"
                  className="img_mountains"
                />
                <img
                  src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle.webp"
                  loading="eager"
                  data-w-id="633f1149-4806-87b3-cffb-fff887f3ce28"
                  sizes="100vw"
                  alt=""
                  srcSet="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-500.webp 500w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-800.webp 800w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-1080.webp 1080w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-1600.webp 1600w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle-p-2000.webp 2000w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf27093bdbf76235c31d9f_Middle.webp 2880w"
                  className="img_mountains_02"
                />
                <img
                  src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top.webp"
                  loading="eager"
                  data-w-id="fd96d106-d929-4193-58b0-9bfd03a2df7a"
                  sizes="100vw"
                  alt=""
                  srcSet="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-500.webp 500w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-800.webp 800w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-1080.webp 1080w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-1600.webp 1600w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-2000.webp 2000w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top-p-2600.webp 2600w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf270a5852682ae5cd0919_Top.webp 2880w"
                  className="img_mountains_03"
                />
                <div className="mountain-gradient" />
                <div className="mountain-gradient offset" />
              </div>
            </div>
            <div className="c-spacer-bg" />
          </div>
          <div className="section s-home-content">
            <div className="container c-advise-content">
              <div className="grid-2column grid-advise">
                <div
                  id="w-node-_89a7c9ce-a962-9a15-bc24-8bb2213d9351-7652d437"
                  data-w-id="89a7c9ce-a962-9a15-bc24-8bb2213d9351"
                  className="c-advise-illustration"
                >
                  <div className="c-advise-illustration-inner">
                    <div className="c-advise">
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf15fb8646db3fbae9aae6_Advise-Shape.webp"
                        loading="lazy"
                        width={198}
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                        alt=""
                        className="img_advise_gradient"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf2d1c60751959e88cbee5_Rectangle%2035.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                        className="img_advise_gradient_corner-small corner-02 shadow"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf2d9b49619a584acda47b_corner-top.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                        className="img_advise_gradient_corner-small-top top shadow"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf2d9b49619a584acda47b_corner-top.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                        className="img_advise_gradient_corner top"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf2d1c60751959e88cbee5_Rectangle%2035.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 1,
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                        className="img_advise_gradient_corner"
                      />
                      <div
                        style={{
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d"
                        }}
                        className="c-advise-box"
                      />
                    </div>
                  </div>
                </div>

                <div
                  id="w-node-_60d25835-0a6e-3a1f-a758-1117034a3eda-7652d437"
                  className="c-content-stack"
                >
                  <h2 className="h1">We Advise</h2>
                  <p>
                    a select number of high caliber projects. Whether you are
                    looking to enter and/or accelerate your journey into Web3, we
                    are here to support you.
                  </p>
                </div>
              </div>
            </div>
            <div className="container c-build-content">
              <div className="grid-2column grid-build">
                <div
                  id="w-node-c0e9dd47-92fc-93fc-6a41-25350f79ea8b-7652d437"
                  className="c-content-stack"
                >
                  <h2 className="h1">We Build</h2>
                  <p>
                    scalable tools and products that solve for a clearly identified
                    set of problems and have a large addressable market.
                  </p>
                </div>
                <div
                  id="w-node-c0e9dd47-92fc-93fc-6a41-25350f79ea82-7652d437"
                  data-w-id="c0e9dd47-92fc-93fc-6a41-25350f79ea82"
                  className="c-build"
                >
                  <div className="c-build-inner">
                    <div className="c-build-parent">
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf15fb73394bf63c53da65_Build-Shape.webp"
                        loading="lazy"
                        alt=""
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_build-gradient"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf3052c3644a5c90e70378_Rectangle%2030.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_build_corner-02"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf3064c3644a9ff4e7053d_Rectangle%2029.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_build_corner"
                      />
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(56px, -49px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(56px, -49px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(56px, -49px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(56px, -49px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="c-build-box-01"
                      />
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(-57px, 50px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(-57px, 50px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(-57px, 50px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(-57px, 50px, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="c-build-box-02"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container c-invest-content">
              <div className="grid-2column grid-invest">
                <div
                  id="w-node-_78f483ef-571c-3909-68f3-1e5c3a3cd950-7652d437"
                  data-w-id="78f483ef-571c-3909-68f3-1e5c3a3cd950"
                  className="c-invest"
                >
                  <div className="c-invest-inner">
                    <div className="c-build-parent">
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c014e70fc062377644a5b0_Invest-Shape.webp"
                        loading="lazy"
                        alt=""
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)"
                        }}
                        className="img_invest-gradient"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c0155733a4b8ce96daf04c_Frame%20590%2002.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_invest-corner"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c014e73ecb8a3e50831886_Rectangle%2032.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_invest-corner-02"
                      />
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)"
                        }}
                        className="c-invest-box-01"
                      />
                      <div className="c-invest-box-01 _02" />
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_78f483ef-571c-3909-68f3-1e5c3a3cd94b-7652d437"
                  className="c-content-stack"
                >
                  <h2 className="h1">We Invest</h2>
                  <p>
                    strategically in early stage founders and teams building
                    disruptive Web3 products, platforms, and infrastructure.
                  </p>
                </div>
              </div>
            </div>
            <div className="container c-connect-content">
              <div className="grid-2column grid-connect">
                <div
                  id="w-node-_9c7b6438-9914-bcd5-cd4f-f635e7ebaa17-7652d437"
                  className="c-content-stack c-we-conect"
                >
                  <h2 className="h1">We Connect</h2>
                  <p>
                    clients to our network of ecosystem partners who act as the
                    force multipliers for success.
                  </p>
                </div>
                <div
                  id="w-node-_9c7b6438-9914-bcd5-cd4f-f635e7ebaa1c-7652d437"
                  data-w-id="9c7b6438-9914-bcd5-cd4f-f635e7ebaa1c"
                  className="c-connect"
                >
                  <div className="c-connect-inner">
                    <div className="c-connect-parent">
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c02350c3dabbfd8c446199_Connect-Shape.webp"
                        loading="lazy"
                        alt=""
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)"
                        }}
                        className="img_connect-gradient"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c02350be3fbf82fb7c38e9_Rectangle%2045.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(null, -33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(null, -33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(null, -33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(null, -33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_connect-arrow-02"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c02350ccb1e184d53a4686_Rectangle%2044.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(-33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_connect-arrow-04"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c023503ecb8a7dad840b41_Rectangle%2042.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(33px, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_connect-arrow-03"
                      />
                      <img
                        src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c0235000c9a25b459db256_Rectangle%2043.svg"
                        loading="lazy"
                        alt=""
                        style={{
                          opacity: 0,
                          WebkitTransform:
                            "translate3d(0, 33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 33px, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                        }}
                        className="img_connect-arrow-01"
                      />
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(135deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(135deg) skew(0, 0)",
                          msTransform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(135deg) skew(0, 0)",
                          transform:
                            "translate3d(-33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(135deg) skew(0, 0)"
                        }}
                        className="c-connect-box-02"
                      />
                      <div
                        style={{
                          WebkitTransform:
                            "translate3d(33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                          MozTransform:
                            "translate3d(33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                          msTransform:
                            "translate3d(33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)",
                          transform:
                            "translate3d(33px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(-45deg) skew(0, 0)"
                        }}
                        className="c-connect-box-01"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section s-team">
            <div className="container c-center">
              <div className="c-content-stack c-content-center">
                <h2 className="h1">Our Team</h2>
                <p>Professionals in the room. Degens at heart.</p>
              </div>
            </div>
            <div className="container c-team-lists">
              <div className="w-dyn-list">
                <div role="list" className="list-team-top w-dyn-items">
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddbad0124b0db1ec54bb_Dean%20Steinbeck.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddbad0124b0db1ec54bb_Dean%20Steinbeck-p-500.webp 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddbad0124b0db1ec54bb_Dean%20Steinbeck.webp 800w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Dean Steinbeck</h4>
                            <div className="team-title">
                              Co-Founder and Managing Director
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/Crypto_Counsel"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/dean-steinbeck/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                    <div className="w-embed">
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddda414a041cea3b58c5_Liat%20Aaronson.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddda414a041cea3b58c5_Liat%20Aaronson-p-500.webp 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6ddda414a041cea3b58c5_Liat%20Aaronson.webp 800w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Liat Aaronson</h4>
                            <div className="team-title">
                              Co-Founder and Managing Director
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/liataaronson"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/liataaronson/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                    <div className="w-embed">
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon-p-500.webp 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon-p-800.webp 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de77ce23884a5b465af0_Matt%20Solomon.webp 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Matt Solomon</h4>
                            <div className="team-title">SVP of Advisory</div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/Degentraland"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/matt-solomon-b57925111/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                    <div className="w-embed">
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung-p-500.webp 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung-p-800.webp 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de3bb0553402c5615265_Kevin%20Jung.webp 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Kevin Jung</h4>
                            <div className="team-title">
                              VP of Strategic Partnerships
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/_pizzabox"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/kevinhjung/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                    <div className="w-embed">
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006-p-1080.png 1080w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006-p-1600.png 1600w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006-p-2000.png 2000w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006-p-2600.png 2600w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006-p-3200.png 3200w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65e5e16394308bf7f5832238_0N1%20K4M1%2006.png 4961w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Colin Goltra</h4>
                            <div className="team-title">SVP of Strategy</div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/Goltra"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/goltra/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                    <div className="w-embed">
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65d69bf4258c621aa244fbb9_IMG_5436.jpg"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65d69bf4258c621aa244fbb9_IMG_5436-p-500.jpg 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65d69bf4258c621aa244fbb9_IMG_5436.jpg 796w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Resa Ng</h4>
                            <div className="team-title">VP of Strategy</div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/resaang"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/resang/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                    <div className="w-embed">
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/651ae97981bc5bd484d52bfc_T048D0AKLTC-U05P1CA7R6Y-5884c6e29dfa-512.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/651ae97981bc5bd484d52bfc_T048D0AKLTC-U05P1CA7R6Y-5884c6e29dfa-512-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/651ae97981bc5bd484d52bfc_T048D0AKLTC-U05P1CA7R6Y-5884c6e29dfa-512.png 512w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Daniel Haboush</h4>
                            <div className="team-title">SVP of Token Design</div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/curiousrabbit27"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/curiousrabbit/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec3feafe0d0f9e40740fe_WolvesDAO-SBT.jpg"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec3feafe0d0f9e40740fe_WolvesDAO-SBT-p-500.jpg 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec3feafe0d0f9e40740fe_WolvesDAO-SBT-p-800.jpg 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec3feafe0d0f9e40740fe_WolvesDAO-SBT.jpg 1024w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Kiefer Zang</h4>
                            <div className="team-title">VP of Token Design</div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/KieferZang"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/kieferzang/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec423468213dd1ccd3c2c_sahil.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec423468213dd1ccd3c2c_sahil-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec423468213dd1ccd3c2c_sahil-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65aec423468213dd1ccd3c2c_sahil.png 1024w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Sahil Teekay</h4>
                            <div className="team-title">
                              Token Engineering Associate
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/SahilTeekay"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/sahil-teekay-117463152/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze.webp"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze-p-500.webp 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze-p-800.webp 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/63c6de67ba61c544414d41a4_Vano%20Narimanidze.webp 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Vano Narimanidze</h4>
                            <div className="team-title">Head of Technology</div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/PowerVANO"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/powervano/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="w-node-f11adb97-024c-122b-1053-abe41105a453-7652d437"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="3b297836-0e61-3c6a-0c45-ede31091eb21"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24a001673920fc9b40c4f_michelle.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 46vw, 20vw"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24a001673920fc9b40c4f_michelle-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24a001673920fc9b40c4f_michelle-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24a001673920fc9b40c4f_michelle.png 1024w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content">
                          <div className="c-team-name">
                            <h4 className="heading">Michelle Finn</h4>
                            <div className="team-title">Chief of Staff</div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/in/michellebfinn/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section>
                <div className="w-layout-blockcontainer container c-center w-container">
                  <div className="w-layout-blockcontainer c-content-stack c-content-center w-container">
                    <h2 className="h1">Our Clients</h2>
                  </div>
                </div>
              </section>
              <div className="w-dyn-list">
                <div role="list" className="list-team-bottom w-dyn-items">
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24b13ec8a2e922804fab1_yuga.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24b13ec8a2e922804fab1_yuga-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24b13ec8a2e922804fab1_yuga-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24b13ec8a2e922804fab1_yuga.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Yuga Labs</h6>
                            <div className="team-title small-title">
                              Yuga Labs is shaping the future of web3 through
                              storytelling, experiences, and community.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/yugalabs"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24bc71673920fc9b5464a_64da0ccf595b5edc5a76c0c7_apecoin.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24bc71673920fc9b5464a_64da0ccf595b5edc5a76c0c7_apecoin-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24bc71673920fc9b5464a_64da0ccf595b5edc5a76c0c7_apecoin-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24bc71673920fc9b5464a_64da0ccf595b5edc5a76c0c7_apecoin.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">ApeCoin</h6>
                            <div className="team-title small-title">
                              ApeCoin is an ERC-20 governance and utility token used
                              within the APE ecosystem to empower a decentralized
                              community building at the forefront of web3.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/apecoin"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c17d32210bf49ecc668_animoca.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c17d32210bf49ecc668_animoca-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c17d32210bf49ecc668_animoca-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c17d32210bf49ecc668_animoca.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Animoca Brands</h6>
                            <div className="team-title small-title">
                              Animoca Brands is a leader in digital entertainment,
                              blockchain, and gamification.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/animocabrands"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c763eeaa1b2d3c6138e_dust.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c763eeaa1b2d3c6138e_dust-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c763eeaa1b2d3c6138e_dust-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24c763eeaa1b2d3c6138e_dust.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Dust Protocol</h6>
                            <div className="team-title small-title">
                              Dust is a utility token for the multi-chain
                              decentralized protocol powering the DeGods / y00ts
                              ecosystem as well as several other large-scale Web3
                              products.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/dust_labs"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24ca1d32210bf49ed37ef_sandbox.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24ca1d32210bf49ed37ef_sandbox-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24ca1d32210bf49ed37ef_sandbox-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24ca1d32210bf49ed37ef_sandbox.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">The Sandbox</h6>
                            <div className="team-title small-title">
                              The Sandbox is a virtual world where players can
                              build, own, and monetize their gaming experiences
                              using $SAND, the main utility token of the platform.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/TheSandboxGame"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24ccd7311567ded523540_jamcity.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24ccd7311567ded523540_jamcity-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24ccd7311567ded523540_jamcity.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Jam City</h6>
                            <div className="team-title small-title">
                              JAM CITY IS AN AWARD-WINNING MOBILE ENTERTAINMENT
                              COMPANY developing unique and deeply engaging Web3
                              games, including Champions Ascension.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/JamCityHQ"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24cf9ec8a2e922806df8e_0n1.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24cf9ec8a2e922806df8e_0n1-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24cf9ec8a2e922806df8e_0n1-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24cf9ec8a2e922806df8e_0n1.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">0N1 Force</h6>
                            <div className="team-title small-title">
                              Top anime NFT project focused on the next-generation
                              of interactive content creation.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/0n1force"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d263a3e0c09e2f0801f_unblocked.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d263a3e0c09e2f0801f_unblocked-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d263a3e0c09e2f0801f_unblocked-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d263a3e0c09e2f0801f_unblocked.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Unblocked</h6>
                            <div className="team-title small-title">
                              Newly imagined NFT applications that enable music
                              &amp; entertainment brands to build meaningful value
                              for their communities.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/onunblocked"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d4a473e7fdf2f1e9271_nf3.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d4a473e7fdf2f1e9271_nf3-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d4a473e7fdf2f1e9271_nf3-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d4a473e7fdf2f1e9271_nf3.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">NF3</h6>
                            <div className="team-title small-title">
                              A multi-asset swaps platform to barter, reserve &amp;
                              exchange your favorite NFT collections, entirely
                              peer-to-peer.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/nf3exchange"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d6f3eeaa1b2d3c73b42_nway.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d6f3eeaa1b2d3c73b42_nway-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d6f3eeaa1b2d3c73b42_nway-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/64f24d6f3eeaa1b2d3c73b42_nway.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">nWay</h6>
                            <div className="team-title small-title">
                              nWay is a developer and publisher of the next
                              generation of online multiplayer games.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/nWayGames"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/654ba5c97f6381c80050ef29_pixelmon_updated.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/654ba5c97f6381c80050ef29_pixelmon_updated-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/654ba5c97f6381c80050ef29_pixelmon_updated-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/654ba5c97f6381c80050ef29_pixelmon_updated.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Pixelmon</h6>
                            <div className="team-title small-title">
                              One of the largest market cap NFT collections in the
                              gaming category. Building out the first truly
                              decentralized IP.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/pixelmon"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02667866bcfdfd27d4b05_overworld.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02667866bcfdfd27d4b05_overworld-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02667866bcfdfd27d4b05_overworld-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02667866bcfdfd27d4b05_overworld.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Overworld</h6>
                            <div className="team-title small-title">
                              A free-to-play, cross-platform sandbox RPG, with a
                              focus on social experiences, collective storytelling,
                              utility-driven collectibles, and deep, engaging
                              multiplayer gameplay
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/OverworldPlay"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02c5b536cc909ce596d28_metalcore.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02c5b536cc909ce596d28_metalcore-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02c5b536cc909ce596d28_metalcore-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b02c5b536cc909ce596d28_metalcore.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">MetalCore</h6>
                            <div className="team-title small-title">
                              A futuristic real-time persistent multiplayer combat
                              game dedicated to tactical mechanized warfare &amp;
                              resource management
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/playmetalcore"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b0242abdc63b67a85b9067_shrapnel.png"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b0242abdc63b67a85b9067_shrapnel-p-500.png 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b0242abdc63b67a85b9067_shrapnel-p-800.png 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65b0242abdc63b67a85b9067_shrapnel.png 896w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Shrapnel</h6>
                            <div className="team-title small-title">
                              The 1st moddable extraction shooter game, built by a
                              unique team of BAFTA &amp; Emmy Award-winning talent,
                              using UE5 &amp; blockchain
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/playSHRAPNEL"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="item-team-bottomw w-dyn-item">
                    <div
                      data-w-id="2922b4c7-4140-361b-43c4-067c0b5b0fc6"
                      className="item_team-top"
                    >
                      <div className="item_team-photo">
                        <img
                          src="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65c2a26b0a3d49886a388812_mintify.jpg"
                          loading="lazy"
                          alt=""
                          sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 224px"
                          srcSet="https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65c2a26b0a3d49886a388812_mintify-p-500.jpg 500w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65c2a26b0a3d49886a388812_mintify-p-800.jpg 800w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65c2a26b0a3d49886a388812_mintify-p-1080.jpg 1080w, https://assets-global.website-files.com/63c6daa5d1d2ee0b7fe8f04e/65c2a26b0a3d49886a388812_mintify.jpg 1100w"
                          className="img_coverphoto"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        className="item_team-content_parent"
                      >
                        <div className="item_team-content content-bottom">
                          <div className="c-team-name">
                            <h6 className="h6-team">Mintify</h6>
                            <div className="team-title small-title">
                              Modular trading terminal for NFT-Fi. Discover, analyze
                              and trade digital assets using powerful multi-chain
                              terminal.
                            </div>
                          </div>
                          <div className="c-team-socials">
                            <a
                              href="https://twitter.com/mintify"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 16 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="index.html#"
                              className="link-social medium w-inline-block w-condition-invisible"
                            >
                              <div className="w-embed">
                                <svg
                                  width={30}
                                  height={18}
                                  viewBox="0 0 30 18"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              href="https://www.linkedin.com/company/mintifyme/"
                              target="_blank"
                              className="link-social w-inline-block"
                            >
                              <div className="w-embed">
                                <svg
                                  width="100%"
                                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                                  viewBox="0 0 14 14"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="item-content-gradient-bg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section>
                <div className="w-layout-blockcontainer container c-center w-container">
                  <div className="w-layout-blockcontainer c-content-stack c-content-center w-container">
                    <a
                      href="https://www.denariilabs.xyz/"
                      target="_blank"
                      className="h1"
                    >
                      Join Our Accelerator
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="section s-footer">
            <div className="container">
              <div className="grid-footer">
                <div id="w-node-_3c95a335-f73a-c92a-fbd1-d62762e896cf-62e896cc">
                  <div>
                    HLV&nbsp;Inc.
                    <br />
                    <a href="mailto:info@hlv.xyz">info@hlv.xyz</a>
                  </div>
                </div>
                <div id="w-node-_3c95a335-f73a-c92a-fbd1-d62762e896d5-62e896cc">
                  <img
                    src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63bf15fac5159ae1b691d70e_LogoHomepage.svg"
                    loading="lazy"
                    alt=""
                    className="img-brand-footer"
                  />
                </div>
                <div id="w-node-_3c95a335-f73a-c92a-fbd1-d62762e896d7-62e896cc">
                  <div>
                    <a href="privacy">
                      Privacy Policy
                      <br />
                    </a>
                    <a href="terms">Terms and Conditions</a>
                  </div>
                </div>
                <div
                  id="w-node-e4b7fdfd-2578-93c1-4625-9d0882e6e0c1-62e896cc"
                  className="footer_mobile-social"
                >
                  <div className="c-socials">
                    <a
                      href="https://twitter.com/HLV_XYZ"
                      target="_blank"
                      className="footer_social twitter w-inline-block"
                    >
                      <div className="w-embed">
                        <svg
                          width="100%"
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                          viewBox="0 0 16 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://hlv-xyz.medium.com/"
                      target="_blank"
                      className="footer_social medium w-inline-block"
                    >
                      <div className="w-embed">
                        <svg
                          width={30}
                          height={18}
                          viewBox="0 0 30 18"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.4375 0.515625C3.75 0.515625 0 4.3125 0 9C0 13.7344 3.75 17.5312 8.4375 17.5312C13.125 17.5312 16.9219 13.7344 16.9219 9C16.9219 4.3125 13.125 0.515625 8.4375 0.515625ZM21.9375 0.984375C19.5938 0.984375 17.7188 4.59375 17.7188 9.04688C17.7188 13.4531 19.5938 17.0625 21.9375 17.0625C24.2812 17.0625 26.2031 13.4531 26.2031 9.04688C26.2031 4.59375 24.2812 0.984375 21.9375 0.984375ZM28.5 1.82812C27.6562 1.82812 27 5.0625 27 9.04688C27 12.9844 27.6562 16.2188 28.5 16.2188C29.2969 16.2188 30 12.9844 30 9C30 5.0625 29.2969 1.82812 28.5 1.82812Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/horizen-labs-ventures/"
                      target="_blank"
                      className="footer_social w-inline-block"
                    >
                      <div className="w-embed">
                        <svg
                          width="100%"
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                          viewBox="0 0 14 14"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 0H0.96875C0.4375 0 0 0.46875 0 1.03125V13C0 13.5625 0.4375 14 0.96875 14H13C13.5312 14 14 13.5625 14 13V1.03125C14 0.46875 13.5312 0 13 0ZM4.21875 12H2.15625V5.34375H4.21875V12ZM3.1875 4.40625C2.5 4.40625 1.96875 3.875 1.96875 3.21875C1.96875 2.5625 2.5 2 3.1875 2C3.84375 2 4.375 2.5625 4.375 3.21875C4.375 3.875 3.84375 4.40625 3.1875 4.40625ZM12 12H9.90625V8.75C9.90625 8 9.90625 7 8.84375 7C7.75 7 7.59375 7.84375 7.59375 8.71875V12H5.53125V5.34375H7.5V6.25H7.53125C7.8125 5.71875 8.5 5.15625 9.5 5.15625C11.5938 5.15625 12 6.5625 12 8.34375V12Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-footer-bg-parent">
              <img
                src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg.png"
                loading="lazy"
                sizes="100vw"
                srcSet="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg-p-500.png 500w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg-p-800.png 800w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg-p-1080.png 1080w, https://assets-global.website-files.com/637250d4decbdf2920394a03/63c026806cd7cbb7a879f0de_footer-bg.png 1440w"
                alt=""
                className="img-footer-bg"
              />
            </div>
          </div>
        </div>
        <div className="popup_wrapper">
          <div className="container">
            <div className="c-popover">
              <div className="w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  method="get"
                  className="form_contact"
                  data-wf-page-id="63bf0d1e91bb3e207652d437"
                  data-wf-element-id="9d5e71f9-e24b-7a51-cb30-35aa7a4a7d32"
                >
                  <h3>Contact us</h3>
                  <div className="input_wrap">
                    <input
                      className="input_field w-input"
                      maxLength={256}
                      name="name"
                      data-name="Name"
                      placeholder="Your Name"
                      type="text"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="input_wrap">
                    <input
                      className="input_field w-input"
                      maxLength={256}
                      name="Company-Name"
                      data-name="Company Name"
                      placeholder="Company Name"
                      type="text"
                      id="Company-Name"
                      required=""
                    />
                  </div>
                  <div className="input_wrap">
                    <input
                      className="input_field w-input"
                      maxLength={256}
                      name="email"
                      data-name="Email"
                      placeholder="Email"
                      type="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <div className="input_wrap input_wrap_area">
                    <textarea
                      id="Message"
                      name="Message"
                      maxLength={5000}
                      data-name="Message"
                      placeholder="Message"
                      className="input_field input_area w-input"
                      defaultValue={""}
                    />
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button button--submit w-button"
                    defaultValue="Submit"
                  />
                </form>
                <div className="success_contact w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <a
                fs-scrolldisable-element="enable"
                data-w-id="1c063e34-7574-b4e8-e50a-6f15f5b749ab"
                href="index.html#"
                className="popup-close w-inline-block"
              >
                <img
                  src="https://assets-global.website-files.com/637250d4decbdf2920394a03/63c71b1bc96d7f42958552f6_Close.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-fixed" />
    </>

  )
}

export default App
