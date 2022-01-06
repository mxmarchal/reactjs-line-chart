import Chart from "./components/Chart";

function App() {
  /* generate a const variable with 20 random numbers between 0 and 20 */
  const data = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );
  return (
    <div className="App">
      <Chart
        data={data}
        strokeWidth={2}
        strokeColor={"#00B8A2"}
        showDots={false}
        width={480}
        height={240}
      />
    </div>
  );
}

export default App;
