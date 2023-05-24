import type { Award } from "~/types";

import LaunchIcon from "@mui/icons-material/Launch";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { OpenMoji } from "~/components/common";

function Award({ award }: { award: Award }) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        display: "block",
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <Stack direction="row" sx={{ mb: 1 }}>
        <OpenMoji code={award.category} width={25} />
        <Typography level="h2" fontSize="md" color="primary">
          {award.year}
        </Typography>
      </Stack>
      <Typography level="body2">{award.organization}</Typography>
      <Typography fontSize="lg" fontWeight="lg">
        {award.name}
      </Typography>

      <Link overlay href={award.url}>
        <Button
          variant="outlined"
          endDecorator={<LaunchIcon />}
          size="sm"
          color="primary"
          aria-label="More information"
          sx={{ mt: 1, ml: "auto", fontWeight: 600 }}
        >
          more
        </Button>
      </Link>
    </Card>
  );
}

export default function Awards({ awards }: { awards: Award[] }) {
  return (
    <Stack spacing={4}>
      {awards.map((a) => (
        <Award key={a.url} award={a} />
      ))}
    </Stack>
  );
}
