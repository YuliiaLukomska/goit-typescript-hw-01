import axios from "axios";

interface Response {
  name: string;
  age: number;
}

async function fetchData(url: string): Promise<Response> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для
// типізації повернутих даних.

console.log(fetchData(""));
