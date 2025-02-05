import {Col, Container, Row} from 'react-bootstrap';

interface PortfolioCardProps {
  imageSource?: string;
  title: string;
  company: string;
  position: string;
  location: string;
  duration: string;
  description: string;
  redirect?: string;
  redirectText?: string;
  darkened?: boolean;
}

/**
 * A card component displaying a portfolio project.
 * @param {PortfolioCardProps} props - A list of properties.
 * @constructor
 */
function PortfolioCard(props: PortfolioCardProps): JSX.Element {
  const bgClassName = props.darkened ? "bg-black" : "bg-white";

  return (
    <div className={"px-3 py-5" + " " + bgClassName}>
      <Row className={"gx-1 gy-3"}>
        <Col xs={12}>
          <Container>
            <h1>{props.title}</h1>
            <h6>{props.description}</h6>
            {props.redirect && props.redirectText && (
              <h5><a href={props.redirect} style={{textDecoration: "none"}}>{props.redirectText} &gt;</a></h5>
            )}
          </Container>
        </Col>
        <Col xs={12}>
          {props.imageSource && (
            <img
              src={props.imageSource}
              alt={"PortfolioCard.imageSource"}
              style={{maxWidth: "100%", maxHeight: 480, width: "auto", height: "auto"}}
            />
          )}
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Company
            <h6>{props.company}</h6>
          </Container>
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Position
            <h6>{props.position}</h6>
          </Container>
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Location
            <h6>{props.location}</h6>
          </Container>
        </Col>
        <Col xs={6} md={3}>
          <Container>
            Duration
            <h6>{props.duration}</h6>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default PortfolioCard;
