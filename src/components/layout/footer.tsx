export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
        </div>
      </div>
    </footer>
  )
}
