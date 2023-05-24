import NLink from "next/link";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

import OpenMoji from "~/components/common/OpenMoji";

type TLink = {
  openmoji: string;
  title: string;
  summary: string;
  linkTo: string;
};

export default function MainLink({ openmoji, title, summary, linkTo }: TLink) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        gap: 2,
        marginBottom: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <OpenMoji code={openmoji} fill />
      </AspectRatio>
      <div>
        <Typography level="h2" fontSize="xl" id="card-description" mb={0.5}>
          {title}
        </Typography>
        <Typography aria-describedby="card-description" mb={1}>
          <NLink href={linkTo} passHref legacyBehavior>
            <Link overlay underline="none" sx={{ color: "text.tertiary" }}>
              {summary}
            </Link>
          </NLink>
        </Typography>
        <Chip
          variant="soft"
          color="primary"
          size="sm"
          sx={{ pointerEvents: "none" }}
        >
          more
        </Chip>
      </div>
    </Card>
  );
}
