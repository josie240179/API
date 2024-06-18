

import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios/:id', async (req, res) => {

   
    const user = await prisma.user.update({
        where: { id: req.params.id },
        data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name
    }
})
console.log(users)

    res.status(200).json(users)
    res.status(201).json({message: "Usuario criado com sucesso"})
})


app.listen(3000)