import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Avatar from "components/Avatar";

describe("Avatar component", () => {
    const mockSrc = "https://example.com/avatar.jpg";
    const mockTitle = "John Doe";

    it("renders without errors", () => {
        render(<Avatar src={mockSrc} title={mockTitle} onClick={() => {}} />);
    });

    it("displays the correct image and title", () => {
        const { getByText, getByAltText } = render(
            <Avatar src={mockSrc} title={mockTitle} onClick={() => {}} />,
        );

        const imageElement = getByAltText(mockTitle) as HTMLImageElement;
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.src).toBe(mockSrc);

        const titleElement = getByText(mockTitle);
        expect(titleElement).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(
            <Avatar src={mockSrc} title={mockTitle} onClick={onClickMock} />,
        );

        const avatarElement = getByText(mockTitle);
        fireEvent.click(avatarElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
