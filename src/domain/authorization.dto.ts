

export interface AuthorizationDTO {
    token: string;
    refresh: string;
    expireAt: Date;
}