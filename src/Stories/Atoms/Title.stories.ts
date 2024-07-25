import type {Meta, StoryObj} from '@storybook/react';
import {Color} from "../../Enums/Color";
import Subtitle from "../../Components/Atoms/Subtitle";
import Title from "../../Components/Atoms/Title";
import {Size} from "../../Enums/Size";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Atoms/Title',
    component: Title,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children : "ImASubtitle",
        textColor : Color.TextPrimary,
        size: Size.Sm
    },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
