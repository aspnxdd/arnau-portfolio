export function parseRepoAndOwner(github: string) {
  return github?.split("/").slice(-2)?.join("/");
}
