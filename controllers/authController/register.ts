import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient();

interface ReqUser {
  username: string,
  email: string,
  password: string
}

export async function register(req: Request, res: Response) {
  const data: ReqUser = req.body;

  const userSchema = z.object({
    username: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(4).max(50)
  });

  const userIsValid = userSchema.safeParse(data);

  if (!userIsValid.success) {
    return res.status(500).json({
      message: userIsValid.error.issues[0].message
    });
  };

  const usernameExist = await prisma.user.findUnique({
    where: {
      username: data.username
    }
  });

  if (usernameExist) {
    return res.status(409).json({
      message: 'Username already exist.'
    });
  };

  const emailExist = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  });

  if (emailExist) {
    return res.status(409).json({
      message: 'Email already exist.'
    });
  };

  const user = await prisma.user.create({ data });

  return res.status(201).json({ user });
}
