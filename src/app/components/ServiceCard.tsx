interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div
      className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
      }}
    >
      {/* Icon Placeholder - 24x24px */}
      <div
        className="mb-6 flex items-center justify-center"
        style={{
          width: '24px',
          height: '24px',
          border: '2px dashed #3B82F6',
          borderRadius: '4px',
        }}
        title="Icon placeholder (24x24px)"
      />

      <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1A1A1A' }}>
        {title}
      </h3>
      <p className="leading-relaxed" style={{ color: '#1A1A1A', opacity: 0.7 }}>
        {description}
      </p>
    </div>
  );
}
