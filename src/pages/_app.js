import Header from "@/components/Header/Header";
import "../assets/css/style.css";
import "../assets/css/animate.css";
import "../assets/css/aos.css";
import "../assets/css/bootstrap-datepicker.css";
import "../assets/css/flaticon.css";
import "../assets/css/icomoon.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/jquery.timepicker.css";
import "../assets/css/ionicons.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/open-iconic-bootstrap.min.css";
import "@/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat+Alternates:wght@500;600;700&family=Work+Sans:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <Script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      />
    </>
  );
}
