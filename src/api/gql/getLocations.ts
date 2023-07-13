import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export type Location = {
  id: string;
  name: string;
  description: string;
  photo: string;
}