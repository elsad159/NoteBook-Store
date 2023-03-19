import Carousel from "react-bootstrap/Carousel";
import Slide1Image from "../assets/slide1.jpg";
import Slide2Image from "../assets/slide2.jpg";
import Slide3Image from "../assets/slide3.jpg";
import Slide4Image from "../assets/slide4.jpg";
import Slide5Image from "../assets/slide5.webp";

function UncontrolledExample() {
  return (
    <>
      <div className="px-4">
        <h1>UserName: </h1>
        <div
          className="line bg-light my-3 w-100"
          style={{ height: "1px" }}
        ></div>
      </div>
      <Carousel className="container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={Slide1Image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Apple MacBook</h3>
            <p>15-inch MacBook Air</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={Slide2Image}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Apple MacBook</h3>
            <p>Pro 13-Inch (2022, M2)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={Slide3Image}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Apple MacBook</h3>
            <p>The Apple MacBook Pro 16 (2021)</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={Slide4Image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>HP Laptop</h3>
            <p>14-dq2020nr</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "450px" }}
            src={Slide5Image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Acer Aspire Vero</h3>
            <p>15.6-inch 1,920 x 1,080-pixel IPS display</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;
