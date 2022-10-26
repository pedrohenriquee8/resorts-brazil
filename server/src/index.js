import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
})



