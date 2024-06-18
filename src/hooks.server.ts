import type { Handle, HandleFetch } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

export const handle1: Handle = async ({ event, resolve }) => {
  const { locals, cookies, isDataRequest, url } = event;

  if (url.pathname.startsWith("/api")) {
    const token = cookies.get("token");

    locals.user = token ? { name: "Jaime", id: 1 } : undefined;
  }

  const response = await resolve(event);

  return response;
};

export const handle = sequence(handle1);

export const handleFetch: HandleFetch = ({ request, event, fetch }) => {
  if (request.url.startsWith("https://dummyjson.com/")) {
    const cookie = event.request.headers.get("cookies");
    if (cookie) {
      request.headers.set("cookie", cookie);
    }
  }
  return fetch(request);
};
