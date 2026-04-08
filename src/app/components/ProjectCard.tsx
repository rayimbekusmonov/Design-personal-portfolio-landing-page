interface ProjectCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
}

export function ProjectCard({ imageUrl, title, tags }: ProjectCardProps) {
  return (
    <div
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
      }}
    >
      {/* Project Image */}
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold" style={{ color: '#1A1A1A' }}>
          {title}
        </h3>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium rounded-lg"
              style={{
                backgroundColor: '#3B82F6',
                color: 'white',
                opacity: 0.9,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
