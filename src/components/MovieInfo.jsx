import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import SubTitleWithIcon from './SubTitleWithIcon'
import Description from './Description'
import {Row, Col} from 'react-bootstrap'

export default function MovieInfo(props){
  const style = {
    paddingLeft: '15px'
  };

    return(
      <div style={style}>
        <Row>
          <Title title={props.movie.title} />
        </Row>
        <Row>
          <Col>
            <h3>Rating: {props.movie.vote_average} </h3> 
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Released in: {props.movie.release_date.substring(0,4)} </h3> 
          </Col>
        </Row>
        <Row>
          <Description category={'Description:'} description={props.movie.overview} />
        </Row>
      </div>
    );
}
