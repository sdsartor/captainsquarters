import React from 'react';
// import { useQuery } from '@apollo/client';

// import { QUERY_CAPTAINS } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_CAPTAINS);
//   const captains = data?.captains || [];

  return (
    <main>
        <h1>Welcome to Captains Quarters!</h1>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
        </div>
      </div>
    </main>
  );
};

export default Home;