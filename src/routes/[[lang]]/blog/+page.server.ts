import { getPages } from "./pages.js";

export async function load({ params }) {
  return {
    pages: await getPages(params.lang),
  };
}