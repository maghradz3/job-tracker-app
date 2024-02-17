"use client";
import JobCard from "./JobCard";
import { useSearchParams } from "next/navigation";
import { getAllJobsActions } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ButtonsPagination from "./ButtonsPagination";
import ButtonContainer from "./ComplexButtonContainer";

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

  const count = data?.count || 0;
  const page = data?.page || 1;
  const totalPages = data?.totalPages || 0;

  if (isPending) {
    return <div className="text-xl">Loading...</div>;
  }
  if (jobs.length < 1) return <div className="text-xl">No Jobs found </div>;
  return (
    <>
      <div className="flex flex-col    md:flex-row items-center justify-between mb-2">
        <h2 className="text-xl font-semibold capitalize">{`found jobs: ${count}`}</h2>
        {totalPages < 2 ? null : (
          <ButtonContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
};

export default JobsList;
