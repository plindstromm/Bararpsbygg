import { useEffect, useRef } from "react";
import "./styles.scss";
import Header from "../../components/Header";
import Greetings from "../../components/Greeting";
import Info from "../../components/Info";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Message from "../../components/Message";
import Footer from "../../components/Footer";
import Cookies from "../../components/Cookies";

function Main() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Dynamically load the LightWidget script
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Update the scroll function with a null check
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main">
      <div className="top">
        <Header />
        <Greetings scrollToContact={scrollToContact} />
      </div>
      <div className="insta-wrapper">
        <div
          className="instagram-feed"
          dangerouslySetInnerHTML={{
            __html: `<iframe
        src="https://cdn.lightwidget.com/widgets/21ec8d77755a5a02a14a6cf88795f725.html"
        scrolling="no"
        allowtransparency="true"
        title="Instagramflöde"
        class="lightwidget-widget"
        style="width: 100%; border: 0; overflow: hidden; height: 500px;">
      </iframe>`,
          }}
        />
      </div>
      <div className="info" id="info-section">
        <Info />
      </div>
      <div className="cards" id="card-section">
        <Card />
      </div>
      <div className="banners" id="banner-section">
        <Banner />
      </div>
      <div className="contacts" ref={contactRef}>
        <Contact />
      </div>
      <div className="messages">
        <Message />
      </div>
      <div className="footers">
        <Footer />
      </div>
      <Cookies />
    </div>
  );
}

export default Main;
