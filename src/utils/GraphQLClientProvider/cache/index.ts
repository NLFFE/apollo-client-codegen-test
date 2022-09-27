import { InMemoryCache } from "@apollo/client";
import introspection from "graphql/types/possible-types";
import { typePolicies } from "./TypoPolicies";

export const cache = new InMemoryCache({
  possibleTypes: introspection.possibleTypes,
  typePolicies,
});
