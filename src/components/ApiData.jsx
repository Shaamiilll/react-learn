import React, { useState, useEffect } from 'react';
import ProfileCard from './Profilecard';

export default function ApiData() {
  const [userData, setUserData] = useState(null);
  const [count, setCount] = useState(1); 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [count]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">User Count: {count}</h1>
      {userData ? (
        <div className=" rounded-lg  p-6">
          <ProfileCard user={userData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="flex mt-4">
        <button className="btn btn-square text-white mx-3 bg-black hover:bg-gray-950" onClick={() => setCount(count - 1)}>-</button>
        <button className="btn btn-square text-white bg-black hover:bg-gray-950" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
