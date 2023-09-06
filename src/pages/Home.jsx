import RestaurantList from '../components/RestaurantList';

function Home() {
  return (
    <main className="layout">
      <h1 className="text-2xl font-semibold">Restaurants</h1>
      <p className="leading-tight text-zinc-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        recusandae necessitatibus ea voluptatibus et sed tempore atque sequi
        deleniti unde.
      </p>

      <RestaurantList />
    </main>
  );
}

export default Home;
