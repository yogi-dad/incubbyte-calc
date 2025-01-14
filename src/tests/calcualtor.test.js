import {add} from "../utils/common.js";
import Calculator from "../components/Calculator/calculator";
import {fireEvent, render,screen} from "@testing-library/react";
const mockAdd = jest.fn();

describe("Calculator", () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });
    test('should return the number itself when a single number is provided', () => {
        expect(add("1")).toBe(1);
    });
    test('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
    });
    test('should return the sum of multiple numbers separated by commas', () => {
        expect(add("1,2,3")).toBe(6);
    });
    test('should handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });
    test('should support different delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });
    test('should throw an exception for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
    });

    test('should show all negative numbers in the exception message', () => {
        expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed -2,-3");
    });


    test('renders input, button, and instruction', () => {
        render(<Calculator add={mockAdd} />);

        expect(screen.getByPlaceholderText(/enter number/i)).toBeInTheDocument();
        expect(screen.getByText(/to change the delimiter/i)).toBeInTheDocument();
        expect(screen.getByText(/calculate sum/i)).toBeInTheDocument();
    });

    test('calls add function with input value when button is clicked', () => {
        render(<Calculator add={mockAdd} />);

        const input = screen.getByPlaceholderText(/enter number/i);
        const button = screen.getByText(/calculate sum/i);

        fireEvent.change(input, { target: { value: '1,2,3' } });
        fireEvent.click(button);

        expect(mockAdd).toHaveBeenCalledWith('1,2,3');
    });

    test('displays the total after button click', () => {
        mockAdd.mockReturnValue(6); // Mock return value for the add function

        render(<Calculator add={mockAdd} />);

        const input = screen.getByPlaceholderText(/enter number/i);
        const button = screen.getByText(/calculate sum/i);

        fireEvent.change(input, { target: { value: '1,2,3' } });
        fireEvent.click(button);

        expect(screen.getByText(/total:/i)).toHaveTextContent('Total: 6');
    });

    test('updates input value correctly', () => {
        render(<Calculator add={mockAdd} />);

        const input = screen.getByPlaceholderText(/enter number/i);
        fireEvent.change(input, { target: { value: '1,2' } });

        expect(input.value).toBe('1,2');
    })

})