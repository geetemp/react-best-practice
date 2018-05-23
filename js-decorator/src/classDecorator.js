function log(name) {
  return function decorator(Class) {
    return (...args) => {
      console.log(`Arguments for ${name}:args`);
      return new Class(...args);
    };
  };
}

@log("Demo")
class Example {
  constructor(name, age) {}
}

const e = new Example("Graham", 34);

console.log(e);
