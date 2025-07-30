export default function Footer() {
  return (
    <footer className="bg-secondary p-4 text-center">
      <p className="text-sm">GRIOT: Empowering Music Success with AI Insights</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="mailto:hello@griotanalytics.com" className="hover:text-accent">
          Contact Us
        </a>
        <a href="https://griotanalytics.com/api" className="hover:text-accent">
          API Access
        </a>
        <a href="/terms" className="hover:text-accent">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}