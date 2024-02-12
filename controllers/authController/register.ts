import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
    const data = req.body;
    const user = await prisma.user.create({ data });

    return res.status(201).json({ user });
}