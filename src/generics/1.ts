import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data as T;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для
// типізації повернутих даних.

interface ResponseObject {
  name: string;
  age: number;
}

async function getObject() {
  try {
    const data = await fetchData<ResponseObject>("");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getObject();
