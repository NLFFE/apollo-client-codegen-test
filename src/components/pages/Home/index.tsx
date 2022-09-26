import { gql, useQuery } from "@apollo/client";
import { BasicTemplate } from "../../templates/BasicTemplate";

export const LOAD_CURRENCY_INFO = gql`
  {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
      }
    }
  }
`;

export default function Home() {
  useQuery(LOAD_CURRENCY_INFO);
  return <BasicTemplate>하이</BasicTemplate>;
}
