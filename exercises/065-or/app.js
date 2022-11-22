function or(expression1, expression2) {
  if (expression1 && expression2) {
    return true;
  } else if (!expression1 && expression2) {
    return true;
  } else if (expression1 && !expression2) {
    return true;
  } else {
    return false;
  }
}