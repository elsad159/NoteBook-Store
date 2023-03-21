import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ShowMoreModal from "../components/ShowMoreModal";

function BuyCompsCard({ cat }) {
  const products = JSON.parse(localStorage.getItem("notebooks"));
  const filterCatProducts =
    products && products.filter((product) => product.category == cat);
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = pro => {
    setShow(true);
    setShowDetails(pro);
  };
  return (
    <div className="d-flex flex-wrap">
      {filterCatProducts &&
        filterCatProducts.map((product, index) => (
          <Card
            className="card d-flex fex-column mx-2 justify-content-center align-items-center "
            style={{ width: "13rem" }}
            key={index}
          >
            <Card.Img
              className="cardImage w-75 my-3"
              variant="top"
              src={product.shekil}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Text>
                <div className="name cardLyrics d-flex">
                  <label htmlFor="">Ad:</label>
                  <span>{product.nouteName}</span>
                </div>
                <div className="tesvir cardLyrics my-1 d-flex">
                  <label htmlFor="">Tesvir:</label>
                  <span>{product.tesvir}</span>
                </div>
                <div className="price cardLyrics my-1 d-flex">
                  <label htmlFor="">Qiymet:</label>
                  <span>{product.price} AZN</span>
                </div>
                <div className="newOld cardLyrics my-1 d-flex">
                  <label htmlFor="">Yeni:</label>
                  <span>{product.yeni}</span>
                </div>
                <div className="phoneNumber cardLyrics d-flex">
                  <label htmlFor="">Telefon nomresi:</label>
                  <span>055-950-50-50</span>
                </div>
              </Card.Text>
              <Button onClick={() => handleShow(product)} variant="primary">
                Etrafli
              </Button>
            </Card.Body>
          </Card>
        ))}

      {show && <ShowMoreModal show={show} handleClose={handleClose} showDetails={showDetails} />}
    </div>
  );
}

export default BuyCompsCard;
