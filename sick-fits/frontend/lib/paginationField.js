import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apolo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count; // might come with empty values
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // if there are items; and there aren't enough items to satisfy how many were requested;
      // and we are on the last page; then just send it
      // For example: when we have 2 items perPage but only have 1 on the last page
      // if we didn't have this if statement: the items.length would be different from the first.. so it would return no data and consequently give an error
      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false;
      }

      if (items.length) {
        console.log(
          `There are ${items.length} items in the cache! Gonna send them to Apollo`
        );
        return items;
      }

      // First thing it does it asks the raed function for those items.
      // We can either do one of two things:
      // First things we can do is return the items because they are already in the cache
      // The other thing we can do is to return false from here (network request)
    },
    merge(existing = [], incoming, { args }) {
      const { skip, first } = args;

      // This runs when the Apollo client comes back from the network with our product
      // After merge apollo will read again and then return the cached products
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged);

      return merged;
    },
  };
}
