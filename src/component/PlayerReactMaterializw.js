import React from 'react'
import { Card, CardTitle, Col, Container, Icon, Row, Section } from 'react-materialize'
import { data } from '../shared/ListOfPlayers'
import { Link } from 'react-router-dom'


export default function PlayerReactMaterializw() {
  return (
<Section>
    <Container>
    <Row>


        {data.map((player) => (

        
  <Col key={player.id}


    m={4}
    s={12}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={player.img} reveal waves="light"/>}
      reveal={<p>{player.info}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title={player.name}
    >
      <p>
        <Link to={`detail/${player.id}`}>
        
          Detail
        
        </Link>
        
      </p>
    </Card>
  </Col>
  ))}
</Row>
</Container>
</Section>
  )
}
