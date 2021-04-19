const BASE_URL = 'http://host.example/optional-namespace';

export const get = (url) => {
  return fetch(`${BASE_URL}/${url}`).then((response) => {
    if (response.ok) return response.json();
    else return Promise.reject(response);
  });
};
