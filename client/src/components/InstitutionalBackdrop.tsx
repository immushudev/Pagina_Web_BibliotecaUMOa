type InstitutionalBackdropProps = {
  image: string;
  position?: string;
  intensity?: "soft" | "strong";
};

export default function InstitutionalBackdrop({
  image,
  position = "center",
  intensity = "strong",
}: InstitutionalBackdropProps) {
  return (
    <div className={`institutional-backdrop institutional-backdrop--${intensity}`} aria-hidden="true">
      <div
        className="institutional-backdrop__image"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
      />
    </div>
  );
}
