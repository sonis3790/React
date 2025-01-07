import React from 'react';

function Card({username, btnText}){
    console.log(username) 
    return(
        <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="300"
            height="300"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">${username}</h1>
            <button>{btnText}</button>
          </div>
          <div className="flex  justify-between font-mono">
            <p></p>
            <p></p>
          </div>
        </div>
      </div>

    )
}

export default Card
