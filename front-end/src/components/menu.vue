<template>
  <div class="animsition">
    <div id="dev1">
      <ul>
        <li>
          <a class="vlt-social-icon vlt-social-icon--style-1" href="#"
          ><span  @click="seeShare">seeShare</span></a>
        </li>
      </ul>
    </div>
    <div id="dev2" style="display: none;">
      <!--Header-->
      <header class="vlt-header vlt-header--default">
        <div
          class="
            vlt-navbar
            vlt-navbar--main
            vlt-navbar--transparent
            vlt-navbar--sticky
          "
        >
          <div class="vlt-navbar-background"></div>
          <div class="vlt-navbar-inner">
            <div class="vlt-navbar-inner--left">
              <!--Logo--><a class="vlt-navbar-logo"
                ><img src="../../static/img/qima_log.png" alt="Gilber"
              /></a>
            </div>
            <div class="vlt-navbar-inner--right">
              <div class="d-flex align-items-center">
                <!--Contacts-->
                <div class="vlt-navbar-contacts"><a href=""></a></div>
                <!--Menu Burger--><a
                  class="vlt-menu-burger js-offcanvas-menu-open"
                  href="#"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  >
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
            ><svg
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
            <p>© 2020 Copyright.<br />All rights reserved.</p>
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
          <!--Order-->
          <!--Section-->
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
                            Inspection<span class="counter">0</span>
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
                            Audit<span class="counter">0</span>
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
                            Certification<span class="counter">0</span>
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
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0s; animation-duration: 700ms"
                      >
                      </div>
                      <div class="vlt-gap-100"></div>
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.1s; animation-duration: 700ms"
                      >
                        <span class="vlt-display-1 has-white-color"
                        >2021 Most Order Factories: Foxconn</span
                        >
                      </div>
                      <div class="vlt-gap-15"></div>
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.2s; animation-duration: 700ms"
                      >
                        <h4 class="vlt-large-heading">
                          GAP & <span class="has-accent-color">QIMA</span> & Foxconn
                        </h4>
                      </div>
                      <div class="vlt-gap-15"></div>
                      <!--Animated Block-->
                      <div
                        class="vlt-animated-block"
                        data-animation-name="fadeInUpSm"
                        style="animation-delay: 0.3s; animation-duration: 700ms"
                      >
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
          <!--ServiceType-->
          <div class="vlt-section pp-scrollable" data-anchor="ServiceType">
            <div class="vlt-section__vertical-align">
              <div class="vlt-section__content">
                <h4 style="position: absolute; top: 30px; right: 778px;">
                  <span class="has-accent-color">QIMA Service Summary 2021</span>
                </h4>
                <h4 style="position: absolute; top: 120px; right: 778px;">
                  <span class="has-accent-color">GAP & QIMA Service Types</span>
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
    return {
      msg: "Welcome to",
      team: "Gryffindor",
    };
  },
  methods: {
    seeShare() {
      debugger;
      $("#dev1").hide();
      $("#dev2").show();
      // let routeUrl = this.$router.resolve({
      //   path: "/annualReport",
      // });
      // window.open(routeUrl.href, "_self");
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
#dev1{
  padding-top: 300px;
}
</style>
