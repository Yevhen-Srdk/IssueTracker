const BASE_URL = "http://localhost:3000/";
type HttpMethod = "POST" | "GET" | "PATCH" | "DELETE";

function request<T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
): Promise<T> {
  const preparedUrl = BASE_URL + url;
  const options: RequestInit = {
    method,
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
    options.headers = { "Content-Type": "application/json" };
  }

  return fetch(preparedUrl, options).then((response) => {
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }

    if (response.status === 204) {
        return;
    }

    return response.json();
  });
}

export const client = {
  get: <T>(url: string) => request<T>("GET", url),
  post: <T>(url: string, data: unknown) => request<T>("POST", url, data),
  patch: <T>(url: string, data: unknown) => request<T>("PATCH", url, data),
  delete: (url: string) => request<void>("DELETE", url),
};
