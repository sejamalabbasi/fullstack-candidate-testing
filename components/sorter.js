import React, { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const SortMenu = ({ jobs, setSearchData, originalData }) => {
  const [locationState, setLocationState] = useState("0");
  const [roleState, setRoleState] = useState("0");
  const [departmentState, setDepartmentState] = useState("0");
  const [educationState, setEducationState] = useState("0");
  const [experienceState, setExperienceState] = useState("0");

  const sortBy = (criteria) => {
    let jobsorted = [];
    switch (criteria) {
      case "Location":
        if (locationState === "0") {
          setLocationState("1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.location < b.items.location ? 1 : -1
          );
        } else if (locationState === "1") {
          setLocationState("-1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.location > b.items.location ? 1 : -1
          );
        } else if (locationState === "-1") {
          setLocationState("0");
          jobsorted = originalData.length > 0 ? [...originalData] : [...jobs];
        }
        break;
      case "Role":
        if (roleState === "0") {
          setRoleState("1");
          jobsorted = [...jobs].sort((a, b) =>
            a.job_title < b.job_title ? 1 : -1
          );
        } else if (roleState === "1") {
          setRoleState("-1");
          jobsorted = [...jobs].sort((a, b) =>
            a.job_title > b.job_title ? 1 : -1
          );
        } else if (roleState === "-1") {
          setRoleState("0");
          jobsorted = originalData.length > 0 ? [...originalData] : [...jobs];
        }
        break;
      case "Department":
        if (departmentState === "0") {
          setDepartmentState("1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.department < b.items.department ? 1 : -1
          );
        } else if (departmentState === "1") {
          setDepartmentState("-1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.department > b.items.department ? 1 : -1
          );
        } else if (departmentState === "-1") {
          setDepartmentState("0");
          jobsorted = originalData.length > 0 ? [...originalData] : [...jobs];
        }
        break;
      case "Education":
        if (educationState === "0") {
          setEducationState("1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.required_skills < b.items.required_skills ? 1 : -1
          );
        } else if (educationState === "1") {
          setEducationState("-1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.required_skills > b.items.required_skills ? 1 : -1
          );
        } else if (educationState === "-1") {
          setEducationState("0");
          jobsorted = originalData.length > 0 ? [...originalData] : [...jobs];
        }
        break;
      case "Experience":
        if (experienceState === "0") {
          setExperienceState("1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.experience < b.items.experience ? 1 : -1
          );
        } else if (experienceState === "1") {
          setExperienceState("-1");
          jobsorted = [...jobs].sort((a, b) =>
            a.items.experience > b.items.experience ? 1 : -1
          );
        } else if (experienceState === "-1") {
          setExperienceState("0");
          jobsorted = originalData.length > 0 ? [...originalData] : [...jobs];
        }
        break;
      default:
        break;
    }
    setSearchData(jobsorted);
  };

  return (
    <ul className="flex">
      <li className="sortJobsTitle">Sort by: </li>
      <li className="ml-2 flex" onClick={() => sortBy("Location")}>
        {locationState !== "0" ? (
          locationState == "1" ? (
            <FaSortDown size={20} />
          ) : (
            <FaSortUp size={20} />
          )
        ) : null}
        Location
      </li>
      <li className="ml-2 flex" onClick={() => sortBy("Role")}>
        {roleState !== "0" ? (
          roleState === "1" ? (
            <FaSortDown size={20} />
          ) : (
            <FaSortUp size={20} />
          )
        ) : null}
        Role
      </li>
      <li className="ml-2 flex" onClick={() => sortBy("Department")}>
        {departmentState !== "0" ? (
          departmentState === "1" ? (
            <FaSortDown size={20} />
          ) : (
            <FaSortUp size={20} />
          )
        ) : null}
        Department
      </li>
      <li className="ml-2 flex" onClick={() => sortBy("Education")}>
        {educationState !== "0" ? (
          educationState === "1" ? (
            <FaSortDown size={20} />
          ) : (
            <FaSortUp size={20} />
          )
        ) : null}
        Education
      </li>
      <li className="ml-2 flex" onClick={() => sortBy("Experience")}>
        {experienceState !== "0" ? (
          experienceState === "1" ? (
            <FaSortDown size={20} />
          ) : (
            <FaSortUp size={20} />
          )
        ) : null}
        Experience
      </li>
    </ul>
  );
};

export default SortMenu;
