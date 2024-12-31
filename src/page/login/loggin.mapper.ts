import { CredentialsApi } from "./api";
import { Credentials } from "./credentials.vm";

export const mapperVmToApi = (credentialsVM: Credentials): CredentialsApi => ({
    user: credentialsVM.user,
    password: credentialsVM.password,
});