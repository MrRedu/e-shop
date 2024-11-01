export const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <section className={`w-full bg-white py-16 px-8 ${className}`}>
      {children}
    </section>
  )
};
