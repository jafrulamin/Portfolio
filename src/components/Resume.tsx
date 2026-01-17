import { Download, ExternalLink, FileText } from "lucide-react";

const GOOGLE_DOCS_RESUME_URL = "https://docs.google.com/document/d/1MHZOEipSZV0VzR2u-OGT_Ab5iDiblIpsyx8oT9XmyUM/edit?usp=sharing";

// Convert to embed URL for preview
const getEmbedUrl = (docsUrl: string) => {
  const match = docsUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://docs.google.com/document/d/${match[1]}/preview`;
  }
  return docsUrl;
};

// Convert to PDF download URL
const getPdfDownloadUrl = (docsUrl: string) => {
  const match = docsUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://docs.google.com/document/d/${match[1]}/export?format=pdf`;
  }
  return docsUrl;
};

export const Resume = () => {
  const embedUrl = getEmbedUrl(GOOGLE_DOCS_RESUME_URL);
  const pdfUrl = getPdfDownloadUrl(GOOGLE_DOCS_RESUME_URL);

  return (
    <section id="resume" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            View my professional experience, skills, and qualifications
          </p>
        </div>

        {/* Resume Preview Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Header with View Button */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <span className="font-medium">Resume - Jafrul Amin</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download="Jafrul_Amin_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <a
                  href={GOOGLE_DOCS_RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Embedded Resume Preview */}
            <div className="aspect-[8.5/11] w-full bg-secondary/10">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                title="Resume Preview"
                allow="autoplay"
              />
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Click "Open in New Tab" for the best viewing experience
          </p>
        </div>
      </div>
    </section>
  );
};
