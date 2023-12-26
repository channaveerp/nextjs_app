import product, { Button } from './Button';

const products = async () => {
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  return data.products;
};

export default async function Home() {
  let data = await products();
  console.log(data);
  return (
    <div>
      <h1>hello</h1>
      {data.map((item) => (
        <>
          <h5>{item.title}</h5>
          <Button price={item.price} />
        </>
      ))}
    </div>
  );
}
