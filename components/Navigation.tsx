import Link from "next/link";
import { usePathname } from "next/navigation";
import Stack from "@mui/joy/Stack";

const ITEMS = [
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Data",
    url: "/data",
  },
  {
    label: "Investigations",
    url: "/stories",
  },
  {
    label: "Awards",
    url: "/awards",
  },
];

export default function Navigation() {
  const path = usePathname();
  return (
    <Stack direction="row" spacing={2}>
      {ITEMS.map(({ label, url }) =>
        path == url ? (
          <span key={url}>{label}</span>
        ) : (
          <Link key={url} href={url}>
            {label}
          </Link>
        )
      )}
    </Stack>
  );
}
