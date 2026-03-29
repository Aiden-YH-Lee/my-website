const StaffLines = ({ className = '' }) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-px w-full" style={{ backgroundColor: 'var(--color-cream-muted)', opacity: 0.3 }} />
      ))}
    </div>
  )
}

export default StaffLines
