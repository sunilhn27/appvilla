interface Todo {
    id: number;
    title: string;
}

export async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 60} });
    const data = await response.json();
    return data as Todo[];
};
