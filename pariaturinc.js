function collect(values) {
  return values.reduce((acc, current) => acc.concat([current]), []);
}
