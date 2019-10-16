import React from 'react';

const Pokecard = props => {
    const {name} = props;
  
    return (
      <>
      <div>
          <div>
              <img src="" alt={name}></img>
              <p></p>
          </div>
          <div>
              <h2></h2>
              <div>
                  <p></p>
                  <p></p>
              </div>
          </div>
      </div>
      </>
    );
  };

export default Pokecard;