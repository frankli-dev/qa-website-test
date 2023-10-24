import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Home from "pages/QA";

// Mocking the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(), // Create a mock function for useNavigate
}));

// Mocking the useUsers hook
jest.mock("hooks/useUsers", () => () => ({
  isLoading: false,
  data: [
    {
      url: "user1",
      avatar_url: "https://example.com/avatar1.jpg",
      login: "user1",
    },
    {
      url: "user2",
      avatar_url: "https://example.com/avatar2.jpg",
      login: "user2",
    },
  ],
  isSuccess: true,
  isError: false,
}));

describe("Home component", () => {
  beforeEach(() => {
    // Reset the mock before each test
    (useNavigate as jest.Mock).mockClear();
  });

  it("renders user avatars correctly", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Ensure that the avatars are present in the component
    const avatarElements = screen.getAllByTestId(
      "avatar"
    ) as HTMLImageElement[];
    expect(avatarElements.length).toBe(2); // Assuming we have 2 mock users

    // Ensure that the avatar URLs and titles are correct
    const user1 = {
      url: "user1",
      avatar_url: "https://example.com/avatar1.jpg",
      login: "user1",
    };
    const user2 = {
      url: "user2",
      avatar_url: "https://example.com/avatar2.jpg",
      login: "user2",
    };

    expect(avatarElements[0].src).toBe(user1.avatar_url);
    // expect(avatarElements[0].nextSibling?.textContent).toBe(user1.login);

    expect(avatarElements[1].src).toBe(user2.avatar_url);
    // expect(avatarElements[1].nextSibling?.textContent).toBe(user2.login);
  });

  it("navigates to the user profile when an avatar is clicked", () => {
    const navigateMock = jest.fn(); // Create a mock function for useNavigate
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Click on the first avatar
    const avatarElement = screen.getAllByTestId("avatar")[0];
    fireEvent.click(avatarElement);

    // Ensure that useNavigate was called with the correct URL
    expect(navigateMock).toHaveBeenCalledWith("/profile/user1");
  });

  // ... Other test cases
});
