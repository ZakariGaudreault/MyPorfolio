"use client";
import { request } from "@octokit/request";
import { OctokitResponse } from "@octokit/types";
import { Suspense, useEffect, useState } from "react";
import SingleRepo from "./singleRepo";
import Container from "./container";

export default function GithubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await request("GET /users/{username}/repos", {
          username: `${username}`,
          type: "owner",
        });
        console.log(response);
        setRepos(response.data); // Assuming the response has a `data` property
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container className="grid grid-cols-1 gap-x-4">
      <Suspense fallback={<div>Loading...</div>}>
        {repos.map((repo: any) => (
          <SingleRepo
            key={repo.id}
            id={repo.id}
            url={repo.html_url}
            description={repo.description}
            full_name={repo.full_name}
          />
        ))}
      </Suspense>
    </Container>
  );
}
