// __tests__/animal.test.js
// 🚨 Remember to keep your `*.test.js` files out of your `/pages` directory!
import { createMocks } from "node-mocks-http";
import getJobs from "../pages/api/jobs";
import data from "../data/jobs.json";

describe("/api/jobs", () => {
  test("returns a the jobs from the api", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });

    await getJobs(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ jobs: data });
  });
});
