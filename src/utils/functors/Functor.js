import Container from "./Container";
import VALUE from "./VALUE";

class Functor extends Container {
  static of(x) {
    return new Functor(x);
  }

  map(fn) {
    return Functor.of(fn(this[VALUE]));
  }
}


export default Functor;
