import { GithubRepo } from "@/misc/types";

const GITHUB_API = "https://api.github.com/repos/";

export async function fetchGithubRepo(ownerAndRepo: string) {
  const response = await fetch(`${GITHUB_API}${ownerAndRepo}`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch data");
  }
  return (await response.json()) as GithubRepo;
}
