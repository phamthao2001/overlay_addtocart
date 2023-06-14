export const getPositionTop = (client) => {
  return (
    ((client.top > 0 ? client.top : 0) +
      (client.bottom < window.innerHeight
        ? client.bottom
        : window.innerHeight)) /
    2
  );
};
export const getPositionLeft = (client) => {
  return (
    ((client.left > 0 ? client.left : 0) +
      (client.right < window.innerWidth ? client.right : window.innerWidth)) /
    2
  );
};
