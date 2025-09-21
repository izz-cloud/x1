import ProjectDetailClient from "./ProjectDetailClient";

const projectData: { [key: string]: any } = {
  "ecommerce-dashboard": {
    title: "E-commerce Dashboard",
    category: "UI/UX Design",
    year: "2024",
    client: "TechCorp Solutions",
    duration: "3 months",
    heroImage:
      "https://images.pexels.com/photos/7689720/pexels-photo-7689720.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "A comprehensive redesign of an e-commerce analytics dashboard that increased user engagement by 40% and reduced task completion time by 60%.",
    challenge:
      "The existing dashboard was cluttered and difficult to navigate, causing user frustration and decreased productivity. Key metrics were buried in complex menus, and the visual hierarchy was poor.",
    solution:
      "I redesigned the interface with a focus on data visualization, clear information architecture, and intuitive navigation. The new design prioritizes the most important metrics and provides contextual insights.",
    tags: ["UI Design", "Data Visualization", "Dashboard", "Analytics"],
    colors: ["#6D28D9", "#0EA5A4", "#EC4899", "#F59E0B"],
    typography: {
      primary: "Inter",
      secondary: "JetBrains Mono",
    },
    gallery: [
      "https://images.pexels.com/photos/7689659/pexels-photo-7689659.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  "brand-identity-studio": {
    title: "Creative Studio Branding",
    category: "Branding",
    year: "2024",
    client: "Pixel Perfect Studio",
    duration: "2 months",
    heroImage:
      "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Complete brand identity system for a creative studio, including logo design, color palette, typography, and brand guidelines.",
    challenge:
      "The studio needed a fresh, modern identity that would appeal to tech startups and established companies while maintaining artistic credibility.",
    solution:
      "Created a versatile brand system that balances creativity with professionalism. The logo adapts across different contexts while maintaining brand recognition.",
    tags: ["Logo Design", "Brand Identity", "Visual System", "Guidelines"],
    colors: ["#1F2937", "#EC4899", "#F59E0B", "#10B981"],
    typography: {
      primary: "Playfair Display",
      secondary: "Inter",
    },
    gallery: [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailClient slug={params.slug} projectData={projectData} />;
}