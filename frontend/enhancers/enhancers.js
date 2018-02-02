import { ALL_ITEMS_QUERY } from "../queries/index";
import { graphql } from "react-apollo";

export const itemEnhancer = graphql(ALL_ITEMS_QUERY, {
  name: "allItemsQuery",
  options({ page }) {
    return {
      variables: {
        skip: page * 3 - 3
      }
    };
  }
});
