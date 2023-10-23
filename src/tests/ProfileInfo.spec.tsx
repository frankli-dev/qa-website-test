import React from "react";
import { render } from "@testing-library/react";
import ProfileInfo from "components/ProfileInfo";
import { convertdate } from "utils/date";

describe("ProfileInfo component", () => {
    const mockProfile = {
        avatar_url: "https://example.com/avatar.jpg",
        name: "John Doe",
        login: "johndoe",
        bio: "A passionate developer",
        public_repos: 10,
        followers: 100,
        following: 50,
        created_at: "2023-08-02T12:34:56Z",
    };

    it("renders without errors", () => {
        render(<ProfileInfo profile={mockProfile} />);
    });

    it("displays the profile information correctly", () => {
        const { getByText, getByAltText } = render(
            <ProfileInfo profile={mockProfile} />,
        );

        const nameElement = getByText("John Doe");
        expect(nameElement).toBeInTheDocument();

        const loginElement = getByText("@johndoe") as HTMLLinkElement;
        expect(loginElement).toBeInTheDocument();
        expect(loginElement.href).toBe("https://github.com/johndoe");

        const bioElement = getByText("A passionate developer");
        expect(bioElement).toBeInTheDocument();

        const reposElement = getByText("Repos");
        expect(reposElement).toBeInTheDocument();
        const reposCountElement = getByText("10");
        expect(reposCountElement).toBeInTheDocument();

        const followersElement = getByText("Followers");
        expect(followersElement).toBeInTheDocument();
        const followersCountElement = getByText("100");
        expect(followersCountElement).toBeInTheDocument();

        const followingElement = getByText("Following");
        expect(followingElement).toBeInTheDocument();
        const followingCountElement = getByText("50");
        expect(followingCountElement).toBeInTheDocument();

        const joinedDateElement = getByText(
            `Joined ${convertdate(new Date("2023-08-02T12:34:56Z"))}`,
        );
        expect(joinedDateElement).toBeInTheDocument();

        const avatarElement = getByAltText("avatar") as HTMLImageElement;
        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement.src).toBe("https://example.com/avatar.jpg");
    });

    it("displays default bio message if profile.bio is null", () => {
        const profileWithNullBio = { ...mockProfile, bio: null };
        const { getByText } = render(
            <ProfileInfo profile={profileWithNullBio} />,
        );

        const defaultBioElement = getByText("This profile has no bio");
        expect(defaultBioElement).toBeInTheDocument();
    });
});
