interface MaterialIconProps {
  name: string;
  className?: string;
  fill?: boolean;
}

/**
 * Renders a Material Symbols Outlined ligature icon.
 * Requires the "Material Symbols Outlined" webfont loaded in the root layout.
 */
export default function MaterialIcon({
  name,
  className = "",
  fill = false,
}: MaterialIconProps) {
  const classes = `material-symbols-outlined ${className}`;
  if (fill) {
    return (
      <span
        aria-hidden="true"
        className={classes}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {name}
      </span>
    );
  }
  return (
    <span aria-hidden="true" className={classes}>
      {name}
    </span>
  );
}