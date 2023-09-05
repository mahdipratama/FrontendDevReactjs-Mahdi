import RestaurantList from '../components/RestaurantList';

function Home() {
  return (
    <main>
      <h1>Restaurants</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        recusandae necessitatibus ea voluptatibus et sed tempore atque sequi
        deleniti unde.
      </p>

      {/* Filters  */}

      <RestaurantList />
    </main>
  );
}

export default Home;
