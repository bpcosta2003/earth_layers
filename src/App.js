// React
import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useState} from "react";

// React Reveal
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

// Images
import fechado from "./images/fechado.png";
import aberto from "./images/aberto.png";
import crosta from "./images/crosta.png";
import manto from "./images/manto.png";
import nucleo from "./images/nucleo.png";

// MUI icons
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

// Css
import "./App.css";

export default function App() {
  const [image, setImage] = useState(fechado);
  const [show, setShow] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [text, setText] = useState("");

  const tagManto = (
    <>
      <h2>Mantle</h2>
      <br />
      <p>
        At close to 3,000 kilometers (1,865 miles) thick, this is Earth’s
        thickest layer. It starts a mere 30 kilometers (18.6 miles) beneath the
        surface. Made mostly of iron, magnesium and silicon, it is dense, hot
        and semi-solid (think caramel candy). Like the layer below it, this one
        also circulates. It just does so far more slowly.
      </p>
      <p>
        Near its upper edges, somewhere between about 100 and 200 kilometers (62
        to 124 miles) underground, the mantle’s temperature reaches the melting
        point of rock. Indeed, it forms a layer of partially melted rock known
        as the asthenosphere (As-THEEN-oh-sfeer). Geologists believe this weak,
        hot, slippery part of the mantle is what Earth’s tectonic plates ride
        upon and slide across.
      </p>

      <p>
        Diamonds are tiny pieces of the mantle we can actually touch. Most form
        at depths above 200 kilometers (124 miles). But rare “super-deep”
        diamonds may have formed as far down as 700 kilometers (435 miles) below
        the surface. These crystals are then brought to the surface in volcanic
        rock known as kimberlite. The mantle’s outermost zone is relatively cool
        and rigid. It behaves more like the crust above it. Together, this
        uppermost part of the mantle layer and the crust are known as the
        lithosphere.
      </p>
    </>
  );
  const tagCrosta = (
    <>
      <h2>Crust</h2>
      <br />
      <p>
        Earth’s crust is like the shell of a hard-boiled egg. It is extremely
        thin, cold and brittle compared to what lies below it. The crust is made
        of relatively light elements, especially silica, aluminum and oxygen.
        It’s also highly variable in its thickness. Under the oceans (and
        Hawaiian Islands), it may be as little as 5 kilometers (3.1 miles)
        thick. Beneath the continents, the crust may be 30 to 70 kilometers
        (18.6 to 43.5 miles) thick.
      </p>
      <p>
        Along with the upper zone of the mantle, the crust is broken into big
        pieces, like a gigantic jigsaw puzzle. These are known as tectonic
        plates. These move slowly — at just 3 to 5 centimeters (1.2 to 2 inches)
        per year. What drives the motion of tectonic plates is still not fully
        understood. It may be related to heat-driven convection currents in the
        mantle below. Some scientists think it’s caused by the tug from slabs of
        crust of different densities, something called “slab pull.”
      </p>
      <p>
        In time, these plates will converge, pull apart or slide past each
        other. Those actions cause most earthquakes and volcanoes. It’s a slow
        ride, but it makes for exciting times here on Earth’s surface.
      </p>
    </>
  );

  const tagNucleo = (
    <>
      <h2>Core</h2>
      <br />
      <h3>The Inner Core</h3>
      <br />
      <p>
        This solid metal ball has a radius of 1,220 kilometers (758 miles), or
        about three-quarters that of the moon. It’s located some 6,400 to 5,180
        kilometers (4,000 to 3,220 miles) beneath Earth’s surface. Extremely
        dense, it’s made mostly of iron and nickel. The inner core spins a bit
        faster than the rest of the planet. It’s also intensely hot:
        Temperatures sizzle at 5,400° Celsius (9,800° Fahrenheit). That’s almost
        as hot as the surface of the sun. Pressures here are immense: well over
        3 million times greater than on Earth’s surface. Some research suggests
        there may also be an inner, inner core. It would likely consist almost
        entirely of iron.
      </p>
      <br />
      <h3> The Outer Core</h3>
      <br />
      <p>
        This part of the core is also made from iron and nickel, just in liquid
        form. It sits some 5,180 to 2,880 kilometers (3,220 to 1,790 miles)
        below the surface. Heated largely by the radioactive decay of the
        elements uranium and thorium, this liquid churns in huge, turbulent
        currents. That motion generates electrical currents. They, in turn,
        generate Earth’s magnetic field. For reasons somehow related to the
        outer core, Earth’s magnetic field reverses about every 200,000 to
        300,000 years. Scientists are still working to understand how that
        happens.
      </p>
    </>
  );

  new Image().src = aberto;
  new Image().src = crosta;
  new Image().src = manto;
  new Image().src = nucleo;

  function ChangeImage(imagem) {
    setShow(false);
    setShowInfo(false);

    setTimeout(() => {
      setImage(imagem);
      setShow(true);
      setShowInfo(true);
      setText("");
    }, 1000);
  }

  function ChangeText(newText) {
    setShow(false);
    setShowInfo(false);

    setTimeout(() => {
      setText(newText);
      setShow(true);
      setShowInfo(true);
    }, 1000);
  }

  return (
    <>
      <Container id="pagina1">
        <Row className="justify-content-center">
          <Fade>
            <h1>LAYERS OF THE EARTH</h1>
          </Fade>
        </Row>

        <Row className="justify-content-center">
          <Zoom when={show} appear={true}>
            <img
              className="earth"
              src={image}
              alt=""
              onClick={() => {
                ChangeImage(aberto);
              }}
            />
            {image !== fechado ? (
              ""
            ) : (
              <Row className="clickHere">
                <ArrowCircleUpIcon sx={{fontSize: 70}} />
                <h2>CLICK HERE</h2>
              </Row>
            )}
          </Zoom>
        </Row>

        <Fade when={showInfo}>
          {image === fechado ? (
            ""
          ) : (
            <Row className="botoes">
              <Col>
                <Button
                  className="btn"
                  variant="info"
                  size="lg"
                  onClick={() => {
                    ChangeImage(crosta);
                    ChangeText(tagCrosta);
                  }}
                >
                  CRUST
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn"
                  variant="danger"
                  onClick={() => {
                    ChangeImage(manto);
                    ChangeText(tagManto);
                  }}
                >
                  MANTLE
                </Button>
              </Col>
              <Col>
                <Button
                  className="btn"
                  variant="warning"
                  size="lg"
                  onClick={() => {
                    ChangeImage(nucleo);
                    ChangeText(tagNucleo);
                  }}
                >
                  CORE
                </Button>
              </Col>
            </Row>
          )}

          {text === "" ? (
            ""
          ) : (
            <Row>
              <h4 className="texto">{text}</h4>
            </Row>
          )}

          {image === fechado ? (
            ""
          ) : (
            <Row className="justify-content-center">
              <Button
                className="back"
                size="lg"
                variant="secondary"
                onClick={() => {
                  ChangeImage(fechado);
                }}
              >
                BACK
              </Button>
            </Row>
          )}
        </Fade>
      </Container>
    </>
  );
}
