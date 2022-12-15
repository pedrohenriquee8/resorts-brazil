import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query"],
});

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        });
        console.log(user);
        return res.status(200).json({ sucess: true });
    } catch (error) {
        console.log(error);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        console.log(user);

        if (user) {
            password === user.password ? res.status(200).json({ user: user }) : res.status(400).json({ sucess: false });
        };
    } catch (error) {
        console.log(error);
    }
});

app.get("/resorts", async (req, res) => {
    try {
        const resorts = await prisma.resort.findMany();
        console.log(resorts);
        return res.status(200).json({ resorts });
    } catch (error) {
        return res.status(400).json({ sucess: false });
    }
});

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
});