function Title({ locked, number }) {
  return (
    <h1 className="title">
      {locked === false ? "Fancy Counter" : `LIMIT BUY PRO FOR >${number}`}
    </h1>
  );
}

export default Title;
