function removeKeysOfObject(data, array) {
  data.forEach((e) => {
    array.forEach((el) => delete e[el]);
  });
  return data;
}

export default removeKeysOfObject;
