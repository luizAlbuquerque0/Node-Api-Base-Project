import { RefreshTokenController } from "../../application/controllers/auth/RefreshTokenController";
import { CreateRefreshtokenUseCase } from "../../application/useCases/auth/CreateRefreshToken";
import { DeleteRefreshTokenUseCase } from "../../application/useCases/auth/DeleteRefreshTokenUseCase";
import { GetRefreshTokenByIdUseCase } from "../../application/useCases/auth/getRefreshTokenByIdUseCase";

export function makeRefreshTokenController() {
  const getRefreshTokenById = new GetRefreshTokenByIdUseCase();
  const deleteRefreshToken = new DeleteRefreshTokenUseCase();
  const createRefreshToken = new CreateRefreshtokenUseCase();

  return new RefreshTokenController(
    getRefreshTokenById,
    deleteRefreshToken,
    createRefreshToken
  );
}
