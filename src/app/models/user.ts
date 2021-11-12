export class User {
    constructor() {
        this.id ;
        this.username;
        this.password;
        this.email;
        this.phone;
        this.type;
        this.fullname;
        this.team;
        this.address;
        this.city;
        this.group;
    }

    id?: number;
    user_id?: number;
    team?: any;
    username?: string;
    password?: string;
    email?: string;
    birthDate?: string;
    address?: string;
    city?: string;
    name?: string;
    phone?: string;
    fullname?: string;
    type?: number;
    active?: boolean;
    digits?: number;
    teamId?: number;
    group?: any;
}
