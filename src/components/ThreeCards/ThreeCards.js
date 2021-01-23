import { Button } from 'reactstrap';
import React from 'react';
import Badge from 'reactstrap/lib/Badge';
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import SimpleCard from 'components/Cards/SimpleCard';

function ThreeCards() {
  return (
    <section className='section section-lg pt-lg-0 mt--100'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg='12'>
            <Row className='row-grid'>
              <Col lg='4'>
                <SimpleCard
                  icon='spaceship'
                  color='primary'
                  title='Frontend'
                  description='Check my frondend projects'
                  badges={['React', 'Angular', 'JavaScript']}
                />
              </Col>
              <Col lg='4'>
                <SimpleCard
                  icon='ui-04'
                  color='success'
                  title='Backend'
                  description='Check my backend projects'
                  badges={['NodeJs', 'C#', 'Java']}
                />
              </Col>
              <Col lg='4'>
                <SimpleCard
                  icon='palette'
                  color='warning'
                  title='Design'
                  description='Look at my Designers here'
                  badges={['PhotoShop', 'Figma', 'Sketch']}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThreeCards;
