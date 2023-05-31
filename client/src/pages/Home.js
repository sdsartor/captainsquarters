import React from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import { QUERY_CAPTAINS } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_CAPTAINS);
//   const captains = data?.captains || [];

  return (
    <main>
      <h1>Welcome to Captains Quarters!</h1>
        <p>Click on this button to create your Captain!</p>
        <Link to="/" className="btn btn-primary">
        Create Captain
      </Link>
    </main>
  );
};

export default Home;