import { createState } from "@persevie/statemanjs";

const name = "statemanjs";

const todosState = createState([]);

function add(el) {
    todosState.update((s) => {
        s.push(el);
    });
}

function reset() {
    todosState.set([]);
}

function set(el) {
    todosState.set(el);
}

const statemanjs = {
    name,
    add,
    reset,
    set,
    getState: todosState.get,
};

export default statemanjs;
