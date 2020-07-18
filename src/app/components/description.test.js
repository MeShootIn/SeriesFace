import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Content from "./content";
import Description from "./description";

// test isolation
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
// ===============

it("Description test", () => {
    let test = language => {
        act(() => {
            render(<Description language={language} />, container);
        });
        expect(container.textContent).toBe(Content.description[language]);
    }

    for (let lang of Content.Languages) { test(lang); }
});