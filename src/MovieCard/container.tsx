import * as React from 'react';

import MovieCardComponent from './component';

export interface MovieCardProps {
    getMovie: (i) => void;
    movie;
    id
  }

const  MovieCardContainer: React.FC<MovieCardProps> = props  => {
    const {
        movie
      } = props;

      return (
        <>
        const { movie } = props;
        return <MovieCardComponent {...movie} />;
      </>
      )
}

export default MovieCardContainer;