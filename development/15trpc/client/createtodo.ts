import { trpc } from ".";

trpc?.userCreate.mutate({ name: 'test' })
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    })