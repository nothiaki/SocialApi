import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function createPost(req: Request, res: Response) {
    const data = req.body;
    const post = await prisma.post.create({ data });

    return res.status(201).json({ post });
}