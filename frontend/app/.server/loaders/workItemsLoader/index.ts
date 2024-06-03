import { json } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function workItemLoader({ request }: LoaderFunctionArgs) {
  // 色々なコードを書く
  let response = await fetch("http://localhost:3001/workitems");
  let users = await response.json();
  return json(users);
}

// loaderの戻り値の型も一緒に返しておくとuseLoaderDataで便利に使える
export type WorkItemLoader = typeof workItemLoader;
