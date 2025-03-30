const express = require("express");
const app = express();

const add = (n1, n2) => {
    return n1 + n2;
};
// ADDITION
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = add(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });

    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Subtraction
const subtract = (n1, n2) => {
    return n1 - n2;
}
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = subtract(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Multiplication
const multiply = (n1, n2) => {
    return n1 * n2;
}
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = multiply(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

// Division
const divide = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return n1 / n2;
}
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }
        const result = divide(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

//Power

const power = (n1, n2) => {
    return Math.pow(n1, n2);//built in function to calculate power
}

app.get("/power", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) throw new Error("n1 incorrectly defined");
        if (isNaN(n2)) throw new Error("n2 incorrectly defined");
        const result = power(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});


// Square root

const sqrt = (n1) => {
    if (n1 < 0) throw new Error("Cannot take square root of a negative number"); // error handling specially for negative numbers
    return Math.sqrt(n1);// built in function to calculate square root
}

app.get("/sqrt", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        if (isNaN(n1)) throw new Error("n1 incorrectly defined");
        const result = sqrt(n1);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});


const port = 3040;
app.listen(port, () => {
    console.log("Listening on port " + port);
});
