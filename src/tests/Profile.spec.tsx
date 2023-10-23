import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useParams, useNavigate } from 'react-router-dom';
import Profile from 'pages/Profile';

// Mocking the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(), // Create a mock function for useParams
  useNavigate: jest.fn(), // Create a mock function for useNavigate
}));

// Mocking the useDetail hook
jest.mock('hooks/useDetail', () => () => ({
  isLoading: false,
  user: {
    // Mock user data for testing
    avatar_url: 'https://example.com/avatar.jpg',
    name: 'John Doe',
    login: 'johndoe',
    bio: 'Software Developer',
    public_repos: 10,
    followers: 100,
    following: 50,
    created_at: '2021-01-01',
  },
  repos: [
    // Mock repository data for testing
    { url: 'repo1', name: 'repo1', language: 'JavaScript', description: 'Description for repo1', html_url: 'https://github.com/repo1' },
    { url: 'repo2', name: 'repo2', language: 'TypeScript', description: 'Description for repo2', html_url: 'https://github.com/repo2' },
  ],
  followers: [
    // Mock follower data for testing
    { url: 'follower1', avatar_url: 'https://example.com/follower1.jpg', login: 'follower1' },
    { url: 'follower2', avatar_url: 'https://example.com/follower2.jpg', login: 'follower2' },
  ],
  orgs: [
    // Mock organization data for testing
    { url: 'org1', avatar_url: 'https://example.com/org1.jpg', login: 'org1' },
    { url: 'org2', avatar_url: 'https://example.com/org2.jpg', login: 'org2' },
  ],
}));

describe('Profile component', () => {
  beforeEach(() => {
    // Reset the mock before each test
    (useParams as jest.Mock).mockClear();
    (useNavigate as jest.Mock).mockClear();
  });

  it('renders user profile information correctly', () => {
    (useParams as jest.Mock).mockReturnValue({ username: 'johndoe' });

    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    // Ensure that user profile information is displayed correctly
    const nameElement = screen.getByText('John Doe');
    const bioElement = screen.getByText('Software Developer');
    const repoElement = screen.getByText('Repositories');
    const followerElement = screen.getByText('Followers');
    const orgElement = screen.getByText('Organizations');

    expect(nameElement).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
    expect(repoElement).toBeInTheDocument();
    expect(followerElement).toBeInTheDocument();
    expect(orgElement).toBeInTheDocument();
  });

  it('navigates to the follower profile when a follower avatar is clicked', () => {
    (useParams as jest.Mock).mockReturnValue({ username: 'johndoe' });
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    // Click on the first follower avatar
    const followerAvatarElement = screen.getAllByTestId('avatar')[0];
    followerAvatarElement.click();

    // Ensure that useNavigate was called with the correct URL
    expect(navigateMock).toHaveBeenCalledWith('/profile/follower1');
  });
});
