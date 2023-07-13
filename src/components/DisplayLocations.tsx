import { useQuery } from '@apollo/client';
import { GET_LOCATIONS, Location } from '@/api/gql/getLocations';
import styles from './DisplayLocations.module.css';

export function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map((loc: Location) => {
    const { id, name, photo, description } = loc;
    return (<article key={id} className={styles.card}>
        <figure>
          <figcaption>
            <h3>{name}</h3>
          </figcaption>
          <img width="400" height="250" alt="location-reference" src={`${photo}`}/>
          <p>
            <strong>About this location:</strong>
          </p>
          <p>{description}</p>
        </figure>
      </article>);
  });
}