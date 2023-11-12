type UserRegisterRequest = {
	email: string; // is unique
	firstName?: string; // min 2 max 30
	lastName?: string; // min 2 max 30
	password: string; // min 5 max 20
	username?: string; // min 2 max 30 if undefined you can duble email when DB
};

type User = {
	email: string; // is unique
	firstName: string;
	id: string;
	lastName: string;
	username: string;
};

type RegisterUserResponse = {
	token: string; // jwt
	user: User;
};

export type { RegisterUserResponse, User, UserRegisterRequest };
