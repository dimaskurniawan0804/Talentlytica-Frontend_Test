import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../src/views/App";

describe("", () => {
  it("Should render the page correctly", async () => {
    render(<App />);
    const title = await screen.queryByText("Aplikasi Penilaian Mahasiswa");
    expect(title).toBeInTheDocument();
  });

  it("Check total dropdown", () => {
    render(<App />);

    const dropdowns = screen.getAllByTestId(/dropdown-\d+/);
    expect(dropdowns).toHaveLength(10);
  });

  it("asserts the values of specific variables through interactions", () => {
    render(<App />);

    const dropdown = screen.getAllByTestId(/dropdown-\d+/)[0];
    expect(screen.getAllByDisplayValue(0));

    fireEvent.click(dropdown);
    const option = screen.getByText(5);
    fireEvent.click(option);
    expect(screen.getAllByDisplayValue(5));
  });

  it('calls saveNilai function when "Simpan" button is clicked', () => {
    URL.createObjectURL = vi.fn();

    const saveNilaiMock = vi.fn();

    render(<App saveNilai={saveNilaiMock} />);

    const saveButton = screen.getByText("Simpan");

    fireEvent.click(saveButton);

    waitFor(() => {
      expect(saveNilaiMock).toHaveBeenCalled();
    });
  });
});
