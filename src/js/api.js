import axios from 'axios';

export async function getImages(query, page) {
  return axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: query,
      client_id: 's1xcWzgCVm-72wlnp8S8m2U5jzKeGn_JByhkE5Oz7Fc',
      per_page: 12,
      page: page,
    },
  });
}
