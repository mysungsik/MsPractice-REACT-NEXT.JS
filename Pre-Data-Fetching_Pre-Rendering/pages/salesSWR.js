import { useEffect, useState } from "react";
import useSWR from "swr";

function UseEffectDataFecthPage(props) {
  const [sales, setSales] = useState(props.sales);
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://next-course-ca17a-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const reformData = [];

      for (const key in data) {
        reformData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(reformData);
    }
  }, [data]);

  if (error) {
    return <div>Fail to Load</div>;
  }

  if (!data && !sales) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {sales.map((sale) => (
        <li key={sale.id}>{sale.id}</li>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://next-course-ca17a-default-rtdb.firebaseio.com/sales.json"
  );

  const data = await response.json();

  const reformData = [];

  for (const key in data) {
    reformData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: reformData,
    },
  };
}

export default UseEffectDataFecthPage;
