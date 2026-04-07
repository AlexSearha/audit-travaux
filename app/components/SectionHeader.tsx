const SectionHeader = ({
  title,
  theme,
  status,
}: {
  title: string;
  theme: string;
  status?: string;
}) => (
  <div className="border-b border-slate-200 pb-4 mb-6">
    <div className="flex justify-between items-start flex-wrap gap-2">
      <h2 className="text-xl font-bold text-slate-800 uppercase tracking-tight">
        <span className="text-red-600 mr-2">{theme} :</span> {title}
      </h2>
      {status && (
        <span
          className={`px-3 py-1 rounded text-xs font-bold uppercase ${status.includes("ALERTE") || status.includes("RÉFUSÉ") ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}
        >
          {status}
        </span>
      )}
    </div>
  </div>
);

export default SectionHeader;
