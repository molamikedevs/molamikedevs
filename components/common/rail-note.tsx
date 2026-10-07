type RailNoteProps = {
  children: React.ReactNode;
};

// A short remark written in the margin in pen blue.
export default function RailNote({ children }: RailNoteProps) {
  return (
    <p className="mt-2 font-serif text-[15px] leading-5 text-brand italic first:mt-0">
      {children}
    </p>
  );
}
