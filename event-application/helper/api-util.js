export async function getAllEvents() {
  const response = await fetch(
    "https://next-course-ca17a-default-rtdb.firebaseio.com/event.json"
  );

  const data = await response.json();

  const reformData = [];

  for (const key in data) {
    reformData.push({
      id: key,
      ...data[key],
    });
  }

  return reformData;
}

export async function findEvent(inputId) {
  const reformData = await getAllEvents();

  const foundEvent = reformData.find((event) => event.id === inputId);

  return foundEvent;
}

export async function getFeatureEvent() {
  const reformData = await getAllEvents();

  const featureEvents = reformData.filter((event) => event.isFeatured == true);

  return featureEvents;
}
