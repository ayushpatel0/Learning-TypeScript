let subs: string | number | boolean;

subs = "Hello";
subs = 42;
subs = true;

let apiRequestStatus: "pending" | "success" | "error";

apiRequestStatus = "pending";

const orders = ["12", "34", "56", "40"]

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === "40") {
        currentOrder = order;
    }
}

console.log(currentOrder);