import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

export default function Cast({cast}) {
  return (
    <Thumbnail>
      <p>{cast.name}</p>
    </Thumbnail>
  );
}

Cast.propTypes = {
  cast: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  })
};
