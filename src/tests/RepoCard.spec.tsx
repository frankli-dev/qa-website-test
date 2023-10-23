import React from "react";
import { render } from "@testing-library/react";
import RepoCard from "components/RepoCard";

describe("RepoCard component", () => {
    const mockRepo = {
        name: "sample-repo",
        language: "JavaScript",
        description: "A sample repository",
        html_url: "https://github.com/user/sample-repo",
        url: "https://github.com/user/sample-repo",
    };

    it("renders without errors", () => {
        render(<RepoCard repo={mockRepo} />);
    });

    it("displays the repo information correctly", () => {
        const { getByText } = render(<RepoCard repo={mockRepo} />);

        const nameElement = getByText("sample-repo");
        expect(nameElement).toBeInTheDocument();

        const languageElement = getByText("JavaScript");
        expect(languageElement).toBeInTheDocument();

        const descriptionElement = getByText("A sample repository");
        expect(descriptionElement).toBeInTheDocument();

        const viewRepoElement = getByText("View Repo") as HTMLLinkElement;
        expect(viewRepoElement).toBeInTheDocument();
        expect(viewRepoElement.href).toBe(
            "https://github.com/user/sample-repo",
        );
    });

    it("displays default language if repo.language is null", () => {
        const repoWithNullLanguage = { ...mockRepo, language: null };
        const { getByText } = render(<RepoCard repo={repoWithNullLanguage} />);

        const defaultLanguageElement = getByText("Readme");
        expect(defaultLanguageElement).toBeInTheDocument();
    });

    it("displays default description if repo.description is null", () => {
        const repoWithNullDescription = { ...mockRepo, description: null };
        const { getByText } = render(
            <RepoCard repo={repoWithNullDescription} />,
        );

        const defaultDescriptionElement = getByText("No description provided.");
        expect(defaultDescriptionElement).toBeInTheDocument();
    });
});
