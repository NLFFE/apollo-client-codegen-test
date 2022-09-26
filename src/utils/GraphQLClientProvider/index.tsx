import { ApolloClient, ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { cache } from "./cache";

interface Props {
  children: ReactNode;
}

export const GraphQLClientProvider = ({ children }: Props) => {
  const client = new ApolloClient({
    uri: "https://graphql.anilist.co/",
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
