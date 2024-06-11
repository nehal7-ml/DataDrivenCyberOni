/**
 * @jest-environment node
 */
import { render, screen, waitFor } from "@testing-library/react";
import Enterprise from "@/app/enterprise/page"; // Adjust the import path based on your project structure
import {
    describe,
    expect,
    it,
    afterAll,
    jest,
    beforeEach,

} from "@jest/globals";
import '@testing-library/jest-dom'
import { DisplayServiceDTO } from "@/crud/DTOs";

const mockServices: DisplayServiceDTO[] = [
    {
        id: "1",
        title: "Service 1",
        featured: true,
        previewContent: "Description 1",
        ServiceDescription: [],
        SubServices: [],
        tags: [],
        hourlyRate: 0,
        htmlEmbed: "",
        updatedAt: new Date(),
        createdAt: new Date(),
        skillsUsed: [],
        valueBrought: [],
        imageId: "1",
        image: {
            src: "",
            name: "",
            id: "",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    },
    {
        id: "1",
        title: "Service 1",
        featured: true,
        previewContent: "Description 1",
        ServiceDescription: [],
        SubServices: [],
        tags: [],
        hourlyRate: 0,
        htmlEmbed: "",
        updatedAt: new Date(),
        createdAt: new Date(),
        skillsUsed: [],
        valueBrought: [],
        imageId: "1",
        image: {
            src: "",
            name: "",
            id: "",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    },
];

// Mocking getFeatured to return some test data
const getFeatured = jest.fn((...args: any) => { return mockServices })

jest.mock("@/lib/prisma", () => (prisma))
jest.mock("@/crud/service", () => ({ getFeatured }))

describe("Enterprise Page", () => {
    beforeEach(() => {
        getFeatured.mockResolvedValue(mockServices);
    });

    it("renders the Enterprise page correctly", async () => {
        render(await Enterprise());

        // Check for initial content
        expect(screen.getByText("Welcome to")).toBeInTheDocument();
        expect(screen.getByText("CyberOni")).toBeInTheDocument();
        expect(screen.getByText("Technologies")).toBeInTheDocument();
        expect(
            screen.getByText("Are you facing difficulties with your Software?"),
        ).toBeInTheDocument();

        // Wait for the services to be loaded and check if they are rendered
        await waitFor(() => {
            expect(screen.getByText("Service 1")).toBeInTheDocument();
            expect(screen.getByText("Description 1")).toBeInTheDocument();
            expect(screen.getByText("Service 2")).toBeInTheDocument();
            expect(screen.getByText("Description 2")).toBeInTheDocument();
        });

        // Check for other sections in the page
        expect(
            screen.getByText("Thank you for your interest in us!"),
        ).toBeInTheDocument();
        expect(
            screen.getByText("Cyberoni's Strategic Development Path"),
        ).toBeInTheDocument();
        expect(screen.getByText("Service we Offer")).toBeInTheDocument();
        expect(
            screen.getByText("Why Select Cyberoni for Your Development Projects?"),
        ).toBeInTheDocument();
        expect(screen.getByText("Our Portfolio")).toBeInTheDocument();
        expect(screen.getByText("Testimonial")).toBeInTheDocument();
    });
});
