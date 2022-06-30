import { useQuery, gql } from '@apollo/client';
import client from "../apollo-client";


interface Composer {
  name: string;
  description? : string
}


export interface Piece {
  title: string;
  content: string;
  slug: string;
  composers: {
    nodes: Composer[]
  }
}

interface PieceData {
  pieces: {
    nodes: Piece[]
  }
}

const GET_PIECES = gql`
  query GetPieces {
    pieces {
      nodes {
        title
        slug
        content
        pieceFields {
          australianDistributorLink
          catalogueNumber
          internationalDistributorLink
          itunes
        }
        content
        composers {
          nodes {
            name
            description
          }
        }
      }
    }
  }
`;

export function getPieces() {
  return client.query({query: GET_PIECES})
}

export function useGetPieces() {
  return useQuery<PieceData, undefined>(GET_PIECES)
}
