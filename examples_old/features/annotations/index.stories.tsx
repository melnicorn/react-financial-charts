import { Story } from "@storybook/react-vite";
import * as React from "react";
import { Label, LabelProps } from "../../../src";
import Annotations from "./Annotations";

export default {
    component: Label,
    title: "Features/Annotations",
    argTypes: {
        fillStyle: { control: "color" },
        text: {
            control: {
                type: "text",
            },
        },
    },
};

const Template: Story<LabelProps> = (args) => <Annotations {...args} />;

export const background = Template.bind({});
