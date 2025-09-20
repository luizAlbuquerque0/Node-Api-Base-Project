import { SignInController } from "../../application/controllers/auth/SignInController";
import { CreateRefreshtokenUseCase } from "../../application/useCases/auth/CreateRefreshToken";
import { makeSignInUseCase } from "./makeSignInUseCase";

export function makeSignInController() {
  const signInUseCase = makeSignInUseCase();
  const createRefreshToken = new CreateRefreshtokenUseCase();

  return new SignInController(signInUseCase, createRefreshToken);
}
