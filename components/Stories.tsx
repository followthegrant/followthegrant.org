import type { Story } from "~/types";

import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "@mui/joy/Link";
import Grid from "@mui/joy/Grid";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

import defaultImg from "~/public/openmojis/1F52C.svg";

function Story({ story }: { story: Story }) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 350,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {story.publisher}
      </Typography>
      <Typography level="body2">{story.date}</Typography>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <Image
          src={!!story.image_url ? story.image_url : defaultImg}
          loading="lazy"
          alt=""
          fill
        />
      </AspectRatio>
      <Typography fontSize="lg" fontWeight="lg">
        {story.title}
      </Typography>

      <Link overlay href={story.url}>
        <Button
          variant="outlined"
          endDecorator={<LaunchIcon />}
          size="sm"
          color="primary"
          aria-label="More information"
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          Read
        </Button>
      </Link>
    </Card>
  );
}

export default function Stories({ stories }: { stories: Story[] }) {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {stories.map((s) => (
        <Grid key={s.url}>
          <Story story={s} />
        </Grid>
      ))}
    </Grid>
  );
}
