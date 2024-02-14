"use client";
import JobCard from "./JobCard";
import { useSearchParams } from "next/navigation";
import { getAllJobsActions } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";

const JobsList = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";
  const pageNumber = Number(searchParams.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search, jobStatus, pageNumber],
    queryFn: () => getAllJobsActions({ search, jobStatus, page: pageNumber }),
  });
  const jobs = data?.jobs || [];
  if (isPending) {
    return <div className="text-xl">Loading...</div>;
  }
  if (jobs.length < 1) return <div className="text-xl">No Jobs found </div>;
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
};

export default JobsList;
