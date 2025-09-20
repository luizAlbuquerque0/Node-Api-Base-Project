import { SignUpUseCase } from "../../application/useCases/auth/SignUpUseCase";

export function makeSignUpUseCase() {
  return new SignUpUseCase();
}
