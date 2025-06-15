import { Story } from "@storybook/react-vite";
import * as React from "react";
import { Cursor, CursorProps } from "../../../src";
import Cursors from "./Cursors";

export default {
    component: Cursor,
    title: "Features/Cursors",
    argTypes: {
        strokeStyle: { control: "color" },
        xCursorShapeFillStyle: { control: "color" },
        xCursorShapeStrokeStyle: { control: "color" },
    },
};

const Template: Story<CursorProps> = (args) => <Cursors {...args} />;

export const cursor = Template.bind({});

export const crosshair = () => <Cursors crosshair />;
