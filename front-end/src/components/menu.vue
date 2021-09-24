<template>
  <div>
    <canvas id="background" style="height: 100%"></canvas>
    <div id="first-page">
      <div id="tx1">
        <img src="../../static/img/tx1.png" />
        <div id="tx-title">
          <span>Our Memory for 2021</span>
        </div>
      </div>
      <div id="tx2">
        <img src="../../static/img/tx2.png" />
      </div>
      <div id="tx3">
        <img src="../../static/img/tx3.png" />
      </div>
      <div id="tx4">
        <img src="../../static/img/tx4.png" />
        <div id="tx4-brand">Happy holidays Mr. Gryffindor!</div>
      </div>
      <div id="tx-content"> 
        <span>Happy holidays Mr. Gryffindor!</span><br />
        <span style="font-size: 38px; font-weight: 700">You and QIMA have come together for 1059 days</span><br /><br />
        <span>On the date of Jan.16th 2019 </span><br/>
        <span>We met each other</span>
      </div>
    </div>
    <div id="tx5">
      <a href="#"><span @click="start">Start our journey</span></a>
    </div>
    <div id="second-page" class="animsition" style="display: none">
      <!--Header-->
      <header class="vlt-header vlt-header--default">
        <div class=" vlt-navbar vlt-navbar--main vlt-navbar--transparent vlt-navbar--sticky">
          <div class="vlt-navbar-background"></div>
          <div class="vlt-navbar-inner">
            <div class="vlt-navbar-inner--left">
              <!--Logo--><a class="vlt-navbar-logo"><img src="../../static/img/qima_log.png" alt="Gilber"/></a>
            </div>
            <div class="vlt-navbar-inner--right">
              <div class="d-flex align-items-center">
                <!--Contacts-->
                <div class="vlt-navbar-contacts"><a href=""></a></div>
                <!--Menu Burger--><a class="vlt-menu-burger js-offcanvas-menu-open" href="#" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"
                    stroke-linejoin="round" >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" /></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!--Offcanvas Menu-->
      <div class="vlt-offcanvas-menu">
        <div class="vlt-offcanvas-menu__header">
          <!--Locales-->
          <div class="vlt-language-switcher">
            <a class="is-active" href="#">Eng</a><a href="#">Fra</a
            ><a href="#">Ger</a>
          </div>
          <!--Menu Burger--><a
            class="
              vlt-menu-burger vlt-menu-burger--opened
              js-offcanvas-menu-close
            "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <defs />
              <path d="M18 6L6 18M6 6l12 12" /></svg
          ></a>
        </div>
        <div class="vlt-offcanvas-menu__footer">
          <!--Socials-->
          <div class="vlt-offcanvas-menu__socials">
            <a class="vlt-social-icon vlt-social-icon--style-1" href="#"
              ><i class="lnir-facebook-filled"></i></a
            ><a class="vlt-social-icon vlt-social-icon--style-1" href="#"
              ><i class="lnir-twitter-original"></i></a
            ><a class="vlt-social-icon vlt-social-icon--style-1" href="#"
              ><i class="lnir-instagram"></i
            ></a>
          </div>
          <!--Copyright-->
          <div class="vlt-offcanvas-menu__copyright">
            <p>© 2021 Copyright.<br />All rights reserved.</p>
          </div>
        </div>
      </div>
      <!--Site Overlay-->
      <div class="vlt-site-overlay"></div>
      <!--Fixed socials-->
      <div class="vlt-fixed-socials">
        <a class="vlt-social-icon vlt-social-icon--style-1" href="#"
          ><i class="lnir-facebook-filled"></i></a
        ><a class="vlt-social-icon vlt-social-icon--style-1" href="#"
          ><i class="lnir-twitter-original"></i></a
        ><a class="vlt-social-icon vlt-social-icon--style-1" href="#"
          ><i class="lnir-instagram"></i
        ></a>
      </div>
      <!--Main-->
      <main class="vlt-main">
        <!--Fullpage Slider-->
        <div
          class="vlt-fullpage-slider"
          data-loop-top=""
          data-loop-bottom=""
          data-speed="450"
        >

          <!--ServiceType-->
          <div class="vlt-section pp-scrollable" data-anchor="ServiceType">
            <div class="vlt-section__vertical-align">
              <div class="vlt-section__content">
                <h4 style="position: absolute; top: 30px; right: 778px;">
                  <span class="has-accent-color">QIMA Service Summary 2021</span>
                </h4>
                <h4 style="margin-top: -600px;alignment: center">
                  We are so happy that you and QIMA have so many business communications.
                  Here are the <span class="has-accent-color">QIMA Services</span> we have provided.
                </h4>
                <div class="vlt-section__projects-background">
                  <img
                    class="is-active"
                    src="../../static/img/ServiceTypes.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <!--Order-->
          <div class="vlt-section pp-scrollable" data-anchor="Order">
            <div class="vlt-section__vertical-align">
              <div class="vlt-section__content">
                <h4 style="position: absolute; top: 30px; right: 778px;">
                  <span class="has-accent-color">QIMA Service Summary 2021</span>
                </h4>
                <div class="container">
                  <div class="row">
                    <div class="col-xl-6">
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0s; animation-duration: 700ms"
                      >
                        <div class="vlt-experience-block">
                          <span class="vlt-experience-block__number"
                          >129<span class="has-accent-color">.</span></span
                          >
                          <h5 class="vlt-experience-block__title">
                            Orders<br/>Finished<br/>2021
                          </h5>
                        </div>
                      </div>
                      <div class="vlt-gap-100--lg"></div>
                    </div>
                    <div class="col-xl-6 col-md-8">
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.1s; animation-duration: 700ms"
                      >
                        <h3>GAP & <span class="has-accent-color">QIMA</span></h3>
                      </div>
                      <div class="vlt-gap-45"></div>
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.2s; animation-duration: 700ms"
                      >
                        <p>
                          Congratulations on completing <span class="has-accent-color">129</span> orders in QIMA.
                          In which inspection orders are more than <span class="has-accent-color">80%</span> of QIMA
                          customers.
                        </p>
                      </div>
                      <div class="vlt-gap-70"></div>
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.3s; animation-duration: 700ms"
                      >
                        <!--Progress Bar-->
                        <div
                          class="vlt-progress-bar"
                          data-final-value="80"
                          data-animation-speed="1000"
                        >
                          <h5 class="vlt-progress-bar__title">
                            Inspection<span class="counter">80</span>
                          </h5>
                          <div class="vlt-progress-bar__bar"><span></span></div>
                        </div>
                      </div>
                      <div class="vlt-gap-70"></div>
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.4s; animation-duration: 700ms"
                      >
                        <!--Progress Bar-->
                        <div
                          class="vlt-progress-bar"
                          data-final-value="50"
                          data-animation-speed="1000"
                        >
                          <h5 class="vlt-progress-bar__title">
                            Audit<span class="counter">50</span>
                          </h5>
                          <div class="vlt-progress-bar__bar"><span></span></div>
                        </div>
                      </div>
                      <div class="vlt-gap-70"></div>
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.5s; animation-duration: 700ms"
                      >
                        <!--Progress Bar-->
                        <div
                          class="vlt-progress-bar"
                          data-final-value="30"
                          data-animation-speed="1000"
                        >
                          <h5 class="vlt-progress-bar__title">
                            Certification<span class="counter">30</span>
                          </h5>
                          <div class="vlt-progress-bar__bar"><span></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Factory-->
          <div class="vlt-section pp-scrollable" data-anchor="Factory">
            <div class="vlt-section__vertical-align">
              <div class="vlt-section__content">
                <h4 style="position: absolute; top: 30px; right: 778px;">
                  <span class="has-accent-color">QIMA Service Summary 2021</span>
                </h4>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="vlt-gap-160"></div>
                      <!--Animated Block-->
                      <div class="vlt-animated-block"
                           data-animation-name="fadeInUpSm"
                           style="animation-delay: 0s; animation-duration: 700ms">
                      </div>
                      <div class="vlt-gap-100"></div>
                      <!--Animated Block-->
                      <div class="vlt-gap-15"></div>
                      <!--Animated Block-->
                      <div class="vlt-animated-block"
                           data-animation-name="fadeInUpSm"
                           style="animation-delay: 0.2s; animation-duration: 700ms">
                        <h4 class="vlt-large-heading">
                          GAP & <span class="has-accent-color">QIMA</span> & Foxconn
                        </h4>
                      </div>
                      <div class="vlt-animated-block"
                           data-animation-name="fadeInUpSm"
                           style="animation-delay: 0.1s; animation-duration: 700ms">
                        <span>2021 Most Order Factories: Foxconn</span>
                      </div>
                      <div class="vlt-gap-15"></div>
                      <div class="vlt-animated-block"
                           data-animation-name="fadeInUpSm"
                           style="animation-delay: 0.3s; animation-duration: 700ms">
                        <h5>
                          Congratulations on completing <span class="has-accent-color">30</span> inspections on products
                          of Foxconn this year.
                        </h5>
                        <h5>
                          More than <span class="has-accent-color">20%</span> of your total inspections.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Trend-->
          <div class="vlt-section pp-scrollable" data-anchor="Trend">
            <div class="vlt-section__vertical-align">
              <div class="vlt-section__content">
                <h4 style="position: absolute; top: 30px; right: 778px;">
                  <span class="has-accent-color">QIMA Service Summary 2021</span>
                </h4>
                <div class="vlt-section__projects-background">
                  <img
                    class="is-active"
                    src="../../static/img/OrderTrends.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--Flow-->
          <div class="vlt-section pp-scrollable" data-anchor="Flow">
            <div class="vlt-section__vertical-align">
              <div class="vlt-section__content">
                <h4 style="position: absolute; top: 30px; right: 778px;">
                  <span class="has-accent-color">QIMA Service Summary 2021</span>
                </h4>
                <h5 style="position: absolute;top: 120px;right: 70px;">
                  <span class="has-accent-color">Your products (inspected by QIMA) destinations</span>
                </h5>
                <div class="vlt-section__projects-background">
                  <img
                    class="is-active"
                    src="../../static/img/MapFlow.gif"
                    style="margin-top: 100px"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <!--Progress Bar-->
          <div class="vlt-fullpage-slider-progress-bar"><span></span></div>
        </div>
      </main>
      <!--Footer-->
      <footer class="vlt-footer vlt-footer--default vlt-footer--fixed">
        <div class="vlt-footer-copyright">
          <p>© QIMA. 2021</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {};
  },
  methods: {
    start() {
      $("#first-page").hide();
      $("#tx5").hide();
      $("#second-page").show();
      $("#background").hide();
    },
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: "Georgia";
}
#first-page {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
}
.hide {
  display: none;
}
.default-div {
  position: absolute;
  height: 100%;
  width: 100%;
}
#tx1 {
  background-color: red;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
}
#tx-title {
  display: none;
  width: 360px;
  height: 45px;
  position: absolute;
  top: 93px;
  left: 750px;
  text-align: center;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 28px;
}
#tx2 {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 3;
}
#tx3 {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
}
#tx4 {
  height: 100%;
  width: 757px;
  position: absolute;
  z-index: 4;
}
#tx4-brand {
  position: absolute;
  bottom: 110px;
  left: 120px;
  width: 380px;
  height: 220px;
  font-family: "Lucida Handwriting", cursive;
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  line-height: 220px;
  transform: rotate(13deg);
  -ms-transform: rotate(13deg);
  -moz-transform: rotate(13deg);
  -webkit-transform: rotate(13deg);
  -o-transform: rotate(13deg);
}
#tx-content {
  text-align: center;
  color: #000;
  width: 780px;
  display: none;
  height: 300px;
  position: absolute;
  top: 200px;
  left: 550px;
  text-align: center;
  font-size: 28px;
  z-index: 5;
}
#tx5 {
  display: none;
  text-align: center;
  color: #000;
  width: 220px;
  height: 300px;
  position: absolute;
  top: 580px;
  left: 830px;
  font-size: 28px;
  z-index: 101;
}
#tx5 a {
  display: block;
  text-decoration: none;
  border: 1px solid #f0a4ae;
  background: #f0a4ae;
  color: #fff;
  padding: 5px;
  margin: 5px;
  width: 200px;
  font-size: 22px;
  border-radius: 24px;
}
#tx5 a:hover {
  background: #ff8a9a;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding-top: 100px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#second-page{
  width: 100%;
  position: absolute;
  top: 0px;
  overflow:scroll;
}
.vlt-section__content{
  position: relative;
}

</style>
