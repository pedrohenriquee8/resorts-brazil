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
        return res.status(200).json({ sucess: true });
    } catch (error) {
        console.log(error);
        return res.status(409).json({ sucess: false });
    }
})

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000");
})



