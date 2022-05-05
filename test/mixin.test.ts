import mixin from "../src/mixin";

describe("Test mixin", () => {
  it("test mixin", () => {
    class Target {}
    mixin(Target, {
      test() {
        console.log("say test");
        return true
      }
    });

    let inst = new Target() as any;
    const spy = jest.spyOn(inst, 'test')
    const result = inst.test()
    expect(spy).toHaveBeenCalled()
    expect(result).toBe(true)
  });
});
