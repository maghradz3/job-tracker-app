"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ButtonContainerProps = {
  currentPage: number;
  totalPages: number;
};

type ButtonProps = {
  page: number;
  activeClass: boolean;
};

import { Button } from "./ui/button";
function ButtonContainer({ currentPage, totalPages }: ButtonContainerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    const defaultParams = {
      search: searchParams.get("search") || "",
      jobStatus: searchParams.get("jobStatus") || "",
      page: String(page),
    };

    let params = new URLSearchParams(defaultParams);

    router.push(`${pathname}?${params.toString()}`);
  };

  const addPageButton = ({ page, activeClass }: ButtonProps) => {
    return (
      <Button
        className=" w-8 h-8 md:w-10 md:h-10"
        key={page}
        size="icon"
        variant={activeClass ? "default" : "outline"}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    // first page
    pageButtons.push(
      addPageButton({ page: 1, activeClass: currentPage === 1 })
    );
    // dots

    if (currentPage > 3) {
      pageButtons.push(
        <Button
          className=" w-8 h-8 md:w-10 md:h-10"
          size="icon"
          variant="outline"
          key="dots-1"
        >
          ...
        </Button>
      );
    }
    // one before current page
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({
          page: currentPage - 1,
          activeClass: false,
        })
      );
    }
    // current page
    if (currentPage !== 1 && currentPage !== totalPages) {
      pageButtons.push(
        addPageButton({
          page: currentPage,
          activeClass: true,
        })
      );
    }
    // one after current page

    if (currentPage !== totalPages && currentPage !== totalPages - 1) {
      pageButtons.push(
        addPageButton({
          page: currentPage + 1,
          activeClass: false,
        })
      );
    }
    if (currentPage < totalPages - 2) {
      pageButtons.push(
        <Button
          className=" w-8 h-8 md:w-10 md:h-10"
          size="icon"
          variant="outline"
          key="dots-2"
        >
          ...
        </Button>
      );
    }
    pageButtons.push(
      addPageButton({
        page: totalPages,
        activeClass: currentPage === totalPages,
      })
    );
    return pageButtons;
  };

  return (
    <div className="flex  gap-x-0 sm:gap-x-2 ">
      {/* prev */}
      <Button
        className="flex items-center gap-x-2    "
        variant="outline"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = totalPages;
          handlePageChange(prevPage);
        }}
      >
        <ChevronLeft />
        <h1 className="hidden sm:block">prev</h1>
      </Button>
      {renderPageButtons()}
      {/* next */}
      <Button
        className="flex items-center gap-x-2  "
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > totalPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
        variant="outline"
      >
        <h1 className="hidden sm:block">next</h1>
        <ChevronRight />
      </Button>
    </div>
  );
}
export default ButtonContainer;
