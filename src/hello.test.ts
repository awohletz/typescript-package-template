import {helloWorld} from "./hello";

describe("hello test", () => {
    it("should return true", async () => {
        const helloReturn = helloWorld();
        expect(helloReturn).toEqual(true);
    });
});
