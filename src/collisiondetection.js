export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.height;
  let topOfBall = ball.position.y;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.width;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  if (
    leftSideOfBall < rightSideOfObject &&
    rightSideOfBall > leftSideOfObject &&
    topOfBall < bottomOfObject &&
    bottomOfBall > topOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
