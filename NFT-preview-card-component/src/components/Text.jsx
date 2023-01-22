import "./Text.scss"


function Text() {
  return (
    <div className="text">
      <h1 className="text__heading">Equilibrium #3429</h1>
      <p className="text__paragraph">Our Equilibrium collection promotes balance and calm.</p>
      <div className="text__bottom">
          <p className="text__bottom--left"><img className="text__icon--left" src="./images/icon-ethereum.svg" alt="ethereum" /> 0.041 ETH</p>
          <p className="text__bottom--right"><img className="text__icon--right" src="./images/icon-clock.svg" alt="clock"/>3 days left</p>
      </div>
    </div>
  );
}

export default Text;
