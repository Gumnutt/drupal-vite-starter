import Button from "./carousel.twig"
import "./carousel.css"

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
    filled: {
      control: { type: "boolean" },
    },
    rounded: {
      control: { type: "boolean" },
    },
    icon: {
      control: { type: "select" },
      options: ["search", "arrow_forward", "arrow_back", "menu", "close"],
    },
    icon_position: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    link: {
      control: { type: "text" },
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
  },
  component: Button,
}

export const Primary = {
  args: {
    text: "Click me",
    variant: "primary",
    size: "small",
    style: "bordered",
    icon: "",
    filled: true,
    rounded: false,
    link: "#",
  },
}

export const Secondary = {
  args: {
    text: "Click me",
    variant: "secondary",
    size: "small",
    style: "bordered",
    icon: "",
    filled: true,
    rounded: false,
    link: "#",
  },
}

export const text = {
  args: {
    text: "Click me",
    variant: "text",
    size: "small",
    style: "bordered",
    icon: "",
    filled: true,
    rounded: false,
    link: "#",
  },
}

export const withIcon = {
  args: {
    text: "Click me",
    variant: "primary",
    size: "small",
    style: "bordered",
    icon: "search",
    filled: true,
    rounded: false,
    link: "#",
  },
}
