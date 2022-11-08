import { useEffect, useState } from "react";

function UseEffectDataFecthPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://next-course-ca17a-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const trasnformData = [];

        for (const key in data) {
          trasnformData.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(trasnformData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div> isLoading...</div>;
  }

  return (
    <div>
      {sales.map((sale) => (
        <p>{sale.id}</p>
      ))}
    </div>
  );
}
export default UseEffectDataFecthPage;
