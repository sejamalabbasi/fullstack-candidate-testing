import React from "react";
import { Header, Search, Filters, JobList, Footer } from "../components";
import useSwr from "swr";
import { useState, useEffect } from "react";

const Index = () => {
  const [searchData, setSearchData] = useState(null);
  const [searchString, setSearchString] = useState("");

  const filterData = () => {
    if (searchString === "") {
      setSearchData(null);
      return;
    }
    fetcher("/api/jobs").then((data) => {
      setSearchData(data.jobs);
    });
  };

  useEffect(() => {
    filterData();
  }, [searchString]);

  const fetcher = (url) =>
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: searchString,
      }),
    }).then((res) => {
      return res.json();
    });
  const { data, error } = useSwr("/api/jobs", fetcher);

  if (error) return <div>Failed to load jobs data</div>;
  if (!data) return <div>Loading...</div>;

  const setData = (data) => {
    setSearchData(data);
  };

  return (
    <div>
      <Header />
      <Search
        setSearchString={setSearchString}
        searchString={searchString}
        jobs={data.jobs}
        setSearchData={setSearchData}
      />
      <div className="flex">
        <Filters />
        <JobList
          jobs={searchData != null ? searchData : data.jobs}
          originalData={data.jobs}
          setSearchData={setData}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
