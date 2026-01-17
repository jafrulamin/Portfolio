export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Jafrul Amin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
