'use client';

export interface ProductProps {
  name: string;
}

export const Product = (props: ProductProps) => {
  const { name } = props;

  return (
    <section>
      <h2>Hello {name}</h2>
    </section>
  );
};
