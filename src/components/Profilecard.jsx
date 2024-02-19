import React from "react";

export default function ProfileCard({ user }) {
  return (
    <div>
      <div className=' h-40 w-100'>
        <h1 className='font-extrabold'>{user.name}</h1>
        <p className='font-extrabold'>{user.email}</p>
      </div>
    </div>
  );
}
