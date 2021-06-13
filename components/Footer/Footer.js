import React from "react";
import { styled } from "stitches.config";
import Separator from "@components/Separator";
import Stack from "@components/Stack";
import LinkPreview from "@components/LinkPreview";

const Footer = () => {
    return (
        <footer>
            <Stack>
                <Separator />
                <LinkPreview url={"https://uiw.tf/"} />
                <Paragraph>
                    Built by{" "}
                    <Link href="https://twitter.com/emilkowalski_" target="_blank">
                        Emil
                    </Link>{" "}
                </Paragraph>
            </Stack>
        </footer>
    );
};

const Paragraph = styled("p", {
    fontSize: 14,
    color: "$gray",
    display: "block",
    textAlign: "center",
});

const Link = styled("a", {
    textDecoration: "none",
    color: "$white",
    display: "inline-block",
});

export default Footer;