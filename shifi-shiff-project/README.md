
למורה היקרה!

עשיתי כמה שינויים בשרת

בUSER
```ts
router.post('/login', (req, res) => {
    const { firstName, password } = req.body;
    const db = JSON.parse(fs.readFileSync(dbPath));
    console.log(req);

    const user = db.users.find(user => user.firstName === firstName && user.password === password);

    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
});




router.put('/', authMiddleware, (req, res) => {
    const { firstName, lastName, email, address, phone } = req.body;
    const id = parseInt(req.header('user-id'));
    const db = JSON.parse(fs.readFileSync(dbPath));
    const user = db.users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.phone = phone;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json({user});
});

```

בRECIPE הוספת אפשרות עדכון מתכון
ןמחקתי את PRODUCT שהיה רשום בPOST
```ts
router.put('/', (req, res) => {
    const { title ,description, authorId,ingredients, instructions } = req.body;
    const id = parseInt(req.header('recipe-id'));

    const db = JSON.parse(fs.readFileSync(dbPath));

    const recipe = db.recipes.find(recipe => recipe.id=== id);

    if (!recipe) {
        return res.status(404).json({ message: "Recipe not found" });
    }

 recipe.title=title;
 recipe.authorId=authorId;
 recipe.description=description;
 recipe.ingredients=ingredients;
 recipe.instructions= instructions;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json({recipe});
});
```