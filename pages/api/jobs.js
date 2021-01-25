import jobs from "../../data/jobs";

export default async (req, res) => {
  res.statusCode = 200;
  console.log({ body: req.body });
  if (req.method === "POST") {
    // console.log({req})
    // this timeout emulates unstable network connection, do not remove this one
    // you need to figure out how to guarantee that client side will render
    // correct results even if server-side can't finish replies in the right order
    await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

    const searchString = req?.body?.search || "";

    if (searchString === "") return res.json({ jobs });

    const filteredData = [];
    jobs.forEach((job) => {
      let matchedItems = [];
      let isFound = false;
      for (let i = 0; i < job.items.length; i++) {
        const item = job.items[i];
        const keyToSearch = Object.keys(item);
        for (let j = 0; j < keyToSearch.length; j++) {
          const key = keyToSearch[j];
          if (
            item[key]
              .toString()
              .toLowerCase()
              .includes(searchString.toLowerCase())
          ) {
            isFound = true;
            matchedItems.push(item);
            break;
          }
        }
      }
      if (isFound) {
        job.items = [...matchedItems];
        filteredData.push(job);
      }
    });
    return res.json({ jobs: filteredData });
  }
};
