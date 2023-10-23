export type User = {
    login: string;
    avatar_url: string;
    name: string | null;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
};

export type Repo = {
    url: string;
    name: string;
    language: string | null;
    description: string | null;
    html_url: string;
};

export type Avatar = {
    url: string;
    login: string;
    avatar_url: string;
};
