


export default function Features(){
    type Feature = {
        title: string;
        description: string;
      };
      
      const features: Feature[] = [
        {
          title: "Visual Asset Generator",
          description:
            "Generate icons, logos, shapes, charts, and more using AI-powered commands. Users just describe what they want—AI does the designing instantly, in SVG, PNG, or Figma-ready formats."
        },
        {
          title: "Multi-Format Export",
          description:
            "Create once, export anywhere. Instantly convert visuals to SVG, HTML, PNG, PDF, or even Figma files—perfect for developers, designers, marketers, and production teams."
        },
        {
          title: "Design Style Presets",
          description:
            "Choose from modern, minimalist, 3D, isometric, hand-drawn, or skeuomorphic styles. Apply your preferred visual tone with a single click across all generated assets."
        },
        {
          title: "Prompt-to-Visual Engine",
          description:
            "Describe anything—“a robot mascot with gears for eyes”—and the AI generates precise visuals with creative flair, using SVG structure for easy customization."
        },
        {
          title: "Interactive Customizer",
          description:
            "Edit AI-generated visuals with a drag-and-drop interface. Adjust colors, shapes, sizes, and layouts in real-time, directly inside the platform without needing design software."
        },
        {
          title: "Visual Intelligence Copilot",
          description:
            "Let AI suggest icons, layouts, or UI components based on the text or data you input. It understands context, whether you’re building a landing page, a dashboard, or a character."
        },
        {
          title: "Data-to-Chart Renderer",
          description:
            "Paste raw data or upload CSVs, and the AI turns it into clean bar, pie, or line charts—fully animated if needed. Export them directly to your app or report."
        },
        {
          title: "Creative Mode Toggle",
          description:
            "Switch between professional, playful, or experimental generation modes. Perfect for designing both enterprise dashboards and quirky game assets from the same platform."
        },
        {
          title: "Smart Template Library",
          description:
            "Access a library of templates: wireframes, dashboards, mobile UI kits, educational diagrams, and more. The AI adapts them to your brand and content instantly."
        },
        {
          title: "Brand Intelligence",
          description:
            "Upload your brand kit—colors, fonts, voice—and the AI auto-generates consistent visual assets that reflect your identity across all formats."
        },
        {
          title: "Collaboration Workspace",
          description:
            "Invite teammates to co-design assets, comment on visuals, manage export formats, and maintain shared folders for campaigns, clients, or product features."
        },
        {
          title: "Version & History Tracker",
          description:
            "Every design change is auto-saved. Revert to previous versions, track changes over time, and manage different visual directions without losing creative progress."
        }
      ];
      

    return(
        <div id="features" className=" bg-black text-white opacity-90 mx-2 py-10 rounded-4xl">
            <h1 className=" text-5xl text-center font-bold opacity-90">Features</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
                {features.map((item, id)=>(
                    <li key={id} className=" p-4 rounded-lg">
                        <h1 className="text-xl opacity-95 font-bold mb-2">{item.title}</h1>
                        <p className="text-gray-300 opacity-85 text-left text-sm">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}