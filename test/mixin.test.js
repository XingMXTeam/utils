import mixin from "../src/mixin";

describe("Test mixin", () => {
  it("test mixin", () => {
    class Target {}
    mixin(Target, {
      test() {
        console.log("say test");
      }
    });

    let inst = new Target();
    expect(inst.test).toBeNull();
  });
});
