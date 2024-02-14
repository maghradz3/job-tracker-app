"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  JobStatus,
  JobsMode,
  createAndEditJobSchema,
  CreateAndEditJobType,
} from "@/utils/types";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CustomFormField, CustomFormSelect } from "./FormComponents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobAction } from "@/utils/actions";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobsMode.FullTime,
    },
  });

  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "Failed to add job" });
        return;
      }
      toast({ description: "Job added successfully" });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      router.push("/jobs");
    },
  });

  function onSubmit(values: CreateAndEditJobType) {
    console.log(values);
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          <CustomFormField name="position" control={form.control} />
          <CustomFormField name="company" control={form.control} />
          <CustomFormField name="location" control={form.control} />
          <CustomFormSelect
            name="status"
            control={form.control}
            items={Object.values(JobStatus)}
            labelText="job status"
          />
          <CustomFormSelect
            name="mode"
            control={form.control}
            items={Object.values(JobsMode)}
            labelText="job mode"
          />
          <Button
            disabled={isPending}
            type="submit"
            className="self-end capitalize"
          >
            {isPending ? "loading..." : "add job"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default CreateJobForm;
