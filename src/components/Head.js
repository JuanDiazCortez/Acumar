

function Head({color, titulo , nivel  , imagen }) {
  return (
    <div className="head">
      <h1 style={{color:color}} >{titulo}</h1>
      <p>{nivel}</p>
      <p>{imagen}</p>
      <img src={imagen}  alt="" />
    </div>
  );
}

export default Head;
