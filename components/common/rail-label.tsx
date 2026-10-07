type RailLabelProps = {
  id: string;
  children: React.ReactNode;
};

export default function RailLabel({ id, children }: RailLabelProps) {
  return (
    <h2
      id={id}
      className="font-serif text-[19px] leading-6 text-muted-foreground italic"
    >
      {children}
    </h2>
  );
}
