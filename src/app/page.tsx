"use client"
// @ts-ignore
import styles from './page.module.css'
import { Product } from '@/components/Product';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DisplayLocations } from '@/components/DisplayLocations';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className={styles.mainContainer}>
        <section>
          <Product name={"John Doe"}></Product>
        </section>
        <section className={styles.locationsContainer}>
          <DisplayLocations/>
        </section>
      </main>
    </ApolloProvider>
  );
}
