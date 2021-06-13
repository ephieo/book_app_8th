function findUsername(shelf, username) {
  let name = Object.keys(shelf.users).filter((e) => e === `${username}`);
  return name;
}

export { findUsername };
