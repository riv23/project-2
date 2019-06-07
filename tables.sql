CREATE TABLE babies (
    id SERIAL PRIMARY KEY,
    date TEXT,
    name TEXT,
    time TIME,
    activity TEXT,
    comments TEXT
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);