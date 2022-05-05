import { PlainObject } from "./interface";
export default function mixin(ctor: Function, methods: PlainObject<Function>) {
  const keyCopier = (key:any) => {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
}
