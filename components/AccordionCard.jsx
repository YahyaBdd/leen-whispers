import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function AccordionCard({title,data,emptyMsg}) {
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p style={{fontFamily:"'BukraRegular', sans-serif"}}>{title}</p>
          </Accordion.Header>
          <Accordion.Body>
          {Object.keys(data).length ? (
          Object.keys(data).map((key) => (
            <>
            <Card>
              <Card.Body>
              <p>
                {data[key].service.description} by {data[key].staff}
              </p>
              <p>
                {data[key].date} at {data[key].time} - In Cart
              </p>
              </Card.Body>
            </Card>
            <br />
            </>
          ))
        ) : (
          <Card>
            <Card.Body>{emptyMsg}</Card.Body>
          </Card>
        )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }
  
  export default AccordionCard;