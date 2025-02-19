const PORT = 3000;

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}

let todos: Todo[] = [
    { id: 1, title: "Learnn Deno", completed: false },
    { id: 2, title: "Learnn to build an API", completed: false },
]

function handleRequest(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if(url.pathname === "/todos" && request.method === "GET"){
        return new Response(JSON.stringify(todos), {
            headers: { "Content-Type": "application/json"},
        });
    }

    if(url.pathname === "/todos" && request.method === "POST"){
        return request.json().then((data: {title: string}) => {
            const newTodo: Todo = {
                id: todos.length +1,
                title: data.title,
                completed: false,
            };
            todos.push(newTodo);
            return new Response(JSON.stringify(newTodo), {
                status: 201,
                headers: { "Content-Type": "application/json"},
            }); 
        })
    }

    return new Response("Not Found", { status: 404});
}

console.log(`Todo API is running on http://localhost:${PORT}/`);
Deno.serve({ port:PORT }, handleRequest);