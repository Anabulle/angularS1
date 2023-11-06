

const products = [
    {a :1, b: 2, c : 100},
    {a :2, b: 21, c: 200},
    {a :3, b: 11, c: 900},
    {a :6, b: 90, c : 900},
    {a :7, b: 89, c : 197},
    {a :8, b: 200, c : 678},
]

products.map(p => ({a: p.a, c : p.c}) ).filter(p => p.c % 2)