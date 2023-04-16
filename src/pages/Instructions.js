import React from 'react';
import { Link } from 'react-router-dom';

const Instructions = () => {
    return (
      <>
        <h1>Instructions</h1>
        <Link to="/q1">
            <button>Next</button>
        </Link>
      </>
    )
  }

export default Instructions;