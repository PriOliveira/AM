import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

const Container = styled.div`
  display: inline-block;
  margin: 4px;
`;

const Image = styled.img`
  margin: 16px;
  height: 200px;
  width: 140px;
`;

const TextContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 180px;
  word-wrap: break-word;
`;

const Title = styled.h4`
  color: rgba(0, 0, 0, 1);
`;

const Subtitle = styled.h5`
  color: #424242;
`;

class GridElement extends React.Component{
  static propTypes = {
    image: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  }

  render(){
    return(
      <Container>
        <Link to={this.props.route}>
          <Image
            alt={this.props.title + " Cover"}
            className="img-thumbnail img-responsive"
            src={this.props.image}
          />
          <TextContainer>
            <Title>{this.props.title}</Title>
            <Subtitle>{this.props.subtitle}</Subtitle>
          </TextContainer>
        </Link>
      </Container>
    );
  }
}
export default GridElement;
