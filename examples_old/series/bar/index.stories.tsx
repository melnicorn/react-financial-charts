import { Story } from "@storybook/react-vite";
import * as React from "react";
import { BarSeries, BarSeriesProps } from "../../../src";
import { Daily, Intraday } from "./BasicBarSeries";

export default {
    component: BarSeries,
    title: "Visualization/Series/Bar",
    argTypes: {
        fillStyle: { control: "color" },
    },
};

const Template: Story<BarSeriesProps> = (args) => <Daily {...args} />;

export const daily = Template.bind({});

const IntradayTemplate: Story<BarSeriesProps> = (args) => <Intraday {...args} />;

export const intraday = IntradayTemplate.bind({});
