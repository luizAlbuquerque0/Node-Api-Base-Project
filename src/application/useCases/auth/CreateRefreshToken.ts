import { RefreshToken } from "@prisma/client";
import { prismaClient } from "../../libs/PrismaCliente";

interface IInput {
  accountId: string;
  expiresAt: Date;
}

type IOutput = {
  refreshToken: RefreshToken;
};

export class CreateRefreshtokenUseCase {
  async execute({ accountId, expiresAt }: IInput): Promise<IOutput> {
    const refreshToken = await prismaClient.refreshToken.create({
      data: {
        accountId,
        expiresAt,
      },
    });

    return {
      refreshToken,
    };
  }
}
