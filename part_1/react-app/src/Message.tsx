function Message() {
  const name = "Mohammad";
  if (name) {
    return <h1>{name}</h1>;
  }
  return <h1>Hello World</h1>;
}

export default Message;
